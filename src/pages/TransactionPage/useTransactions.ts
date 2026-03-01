import type { PaginationState } from "@tanstack/react-table";
import dayjs from "dayjs";
import { createElement, useCallback, useEffect, useMemo, useState } from "react";

import type { Transaction } from "../../api/transactions";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import type { ColumnDef } from "../../components/Table/DataTable/DataTable";
import { useStoreCategories, useStoreFrequencies, useStoreTransactions } from "../../store";
import { formatAmountWithColor } from "../../utils/currency";

const defaultPeriod = () => dayjs().startOf("month").format("YYYY-MM");

export function useTransactions() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | undefined>(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [period, setPeriod] = useState<string>(() => defaultPeriod());
  const [filterOptions, setFilterOptions] = useState<Record<string, string>>({ categoryId: "", label: "", amount: "" });
  const [resetFiltersSignal, setResetFiltersSignal] = useState(0);

  const { fetchTransactions, meta, transactions, loading } = useStoreTransactions();
  const { fetchCategoriesOptions, categoriesOptions } = useStoreCategories();
  const { fetchFrequencies, frequencies } = useStoreFrequencies();
  const limit = 10;
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });

  const handlePeriodChange = (value: string) => {
    setPeriod(value);
    setPage({ pageIndex: 0, pageSize: limit });
  };

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

  // Fonction générique pour gérer tous les filtres
  const handleFilter = useCallback((key: string, value: string) => {
    setFilterOptions((prev) => ({ ...prev, [key]: value }));
    setPage((prev) => ({ ...prev, pageIndex: 0 }));
  }, []);

  // Déclenche le fetch à chaque changement de filtre, page ou période
  useEffect(() => {
    let to: string | undefined;
    if (period) {
      to = dayjs(period).endOf("month").format("YYYY-MM-DD");
    }
    fetchTransactions({
      limit,
      page: page.pageIndex + 1,
      categoryId: filterOptions.categoryId || undefined,
      label: filterOptions.label || undefined,
      amount: Number(filterOptions.amount) || undefined,
      to,
    });
  }, [fetchTransactions, limit, page.pageIndex, filterOptions, period]);

  const handleReset = useCallback(() => {
    setFilterOptions({ categoryId: "", label: "", amount: "" });
    setPage({ pageIndex: 0, pageSize: limit });
    setResetFiltersSignal((previousSignal) => previousSignal + 1);
  }, [limit]);

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
        header: "Catégorie",
        cell: ({ row }) =>
          row.original.categoryId
            ? `${row.original.category?.label}`
            : createElement("em", { className: "text-warning" }, "Aucune catégorie"),
        enableFiltering: true,
        enableEditing: true,
        options: {
          filterOptions: categoriesOptions.map((cat) => ({
            value: cat.value.toString(),
            label: cat.label,
          })),
          editOptions: categoriesOptions.map((cat) => ({
            value: cat.value.toString(),
            label: cat.label,
          })),
          filterPlaceholder: "Catégorie",
          filterEmptyLabel: "Toutes",
          onChange: (value: string) => handleFilter("categoryId", value),
        },
      },
      {
        accessorKey: "amount",
        header: "Montant",
        cell: ({ row }) => formatAmountWithColor(row.original.amount),
        enableFiltering: true,
        options: {
          filterPlaceholder: "Montant",
          onChange: (value: string) => handleFilter("amount", value),
        },
        currency: true,
      },
      {
        accessorKey: "label",
        header: "Libellé",
        enableFiltering: true,
        options: {
          filterPlaceholder: "Rechercher un libellé...",
          onChange: (value: string) => handleFilter("label", value),
        },
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          return createElement(ActionMenu, { actions: getActions(row.original) });
        },
      },
    ],
    [categoriesOptions, handleFilter, getActions],
  );
  useEffect(() => {
    if (categoriesOptions.length === 0) fetchCategoriesOptions();
    if (frequencies.length === 0) fetchFrequencies();
  }, [categoriesOptions.length, fetchCategoriesOptions, fetchFrequencies, frequencies.length]);

  // (supprimé, remplacé par le useEffect plus haut qui gère filterOptions)

  return {
    columns,
    fetchTransactions,
    meta,
    transactions,
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
    handleReset,
    loading,
    resetFiltersSignal,
  };
}
