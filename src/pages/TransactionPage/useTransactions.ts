import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import dayjs from "dayjs";
import { createElement, useCallback, useEffect, useMemo, useState } from "react";

import type { Transaction } from "../../api/transactions";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { FilterInput, FilterSelect } from "../../components/Filters";
import { useStoreCategories, useStoreFrequencies, useStoreTransactions } from "../../store";

const defaultPeriod = () => dayjs().startOf("month").format("YYYY-MM");

interface FilterState {
  category: string;
  label: string;
  amount: string;
}

export function useTransactions() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | undefined>(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [period, setPeriod] = useState<string>(() => defaultPeriod());
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    label: "",
    amount: "",
  });

  const { fetchTransactions, meta, transactions } = useStoreTransactions();
  const { fetchCategories, categories } = useStoreCategories();
  const { fetchFrequencies, frequencies } = useStoreFrequencies();
  const limit = 10;
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });

  const handlePeriodChange = useCallback((value: string) => {
    setPeriod(value);
    setPage({ pageIndex: 0, pageSize: limit });
  }, []);

  const handleFilterChange = useCallback((filterKey: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
    setPage({ pageIndex: 0, pageSize: limit });
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters({ category: "", label: "", amount: "" });
    setPage({ pageIndex: 0, pageSize: limit });
  }, []);

  const handleCreate = useCallback(() => {
    setSelectedTransaction(undefined);
    setIsEditModalOpen(true);
  }, []);

  const handleEdit = useCallback((transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsEditModalOpen(true);
  }, []);

  const handleDelete = useCallback((transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsDeleteModalOpen(true);
  }, []);

  const closeModals = useCallback(() => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedTransaction(undefined);
  }, []);

  const getActions = useCallback(
    (transaction: Transaction): MenuAction[] => [
      {
        label: "Éditer",
        style: "outline",
        onClick: () => handleEdit(transaction),
      },
      {
        label: "Supprimer",
        style: "dangerOutline",
        onClick: () => handleDelete(transaction),
      },
    ],
    [handleEdit, handleDelete],
  );

  const columns: ColumnDef<Transaction>[] = useMemo(
    () => [
      {
        accessorKey: "dueAt",
        header: "Date",
        cell: ({ row }) => new Date(row.original.dueAt).toLocaleDateString(),
      },
      {
        accessorKey: "category",
        header: () =>
          createElement(FilterSelect, {
            value: filters.category,
            onChange: (value) => handleFilterChange("category", value),
            options: categories,
            label: "Catégorie",
          }),
        cell: ({ row }) => (row.original.categoryId ? `${row.original.category?.label}` : "Aucune catégorie"),
      },
      {
        accessorKey: "amount",
        header: () =>
          createElement(FilterInput, {
            value: filters.amount,
            onChange: (value) => handleFilterChange("amount", value),
            label: "Montant",
            placeholder: "Rechercher...",
          }),
        cell: ({ row }) => {
          const amount = Number(row.original.amount).toFixed(2);
          const isIncome = row.original.category?.type === "INCOME";

          return createElement(
            "span",
            {
              className: `font-medium ${isIncome ? "text-green-600" : "text-red-600"}`,
            },
            `${isIncome ? "+" : ""} ${amount} €`,
          );
        },
      },
      {
        accessorKey: "label",
        header: () =>
          createElement(FilterInput, {
            value: filters.label,
            onChange: (value) => handleFilterChange("label", value),
            label: "Libellé",
            placeholder: "Rechercher...",
          }),
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          return createElement(ActionMenu, { actions: getActions(row.original) });
        },
      },
    ],
    [getActions, filters, categories, handleFilterChange],
  );
  useEffect(() => {
    if (categories.length === 0) fetchCategories();
    if (frequencies.length === 0) fetchFrequencies();
  }, [categories.length, fetchCategories, fetchFrequencies, frequencies.length]);

  useEffect(() => {
    const from = dayjs(period, "YYYY-MM").startOf("month").format("YYYY-MM-DD");
    const to = dayjs(period, "YYYY-MM").endOf("month").format("YYYY-MM-DD");
    fetchTransactions({ limit, page: page.pageIndex + 1, from, to });
  }, [fetchTransactions, limit, page.pageIndex, period]);

  // Filtrer les transactions par catégorie et recherche
  const filteredTransactions = useMemo(() => {
    let filtered = transactions;

    // Filtre par catégorie
    if (filters.category) {
      filtered = filtered.filter((tx) => tx.categoryId === filters.category);
    }

    // Filtre par libellé
    if (filters.label.trim()) {
      const query = filters.label.toLowerCase();
      filtered = filtered.filter((tx) => tx.label.toLowerCase().includes(query));
    }

    // Filtre par montant
    if (filters.amount.trim()) {
      const query = filters.amount;
      filtered = filtered.filter((tx) => Math.abs(Number(tx.amount)).toString().includes(query));
    }

    return filtered;
  }, [transactions, filters]);

  return {
    columns,
    fetchTransactions,
    meta,
    transactions: filteredTransactions,
    isEditModalOpen,
    isDeleteModalOpen,
    selectedTransaction,
    handleCreate,
    handleEdit,
    handleDelete,
    closeModals,
    page,
    setPage,
    limit,
    period,
    handlePeriodChange,
    categories,
    filters,
    handleFilterChange,
    handleResetFilters,
  };
}
