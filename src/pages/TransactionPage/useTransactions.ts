import type { PaginationState } from "@tanstack/react-table";
import dayjs from "dayjs";
import { createElement, useCallback, useEffect, useMemo, useState } from "react";

import type { Transaction } from "../../api/transactions";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import type { FilterableColumnDef } from "../../components/Table/DataTable/DataTable";
import { useStoreCategories, useStoreFrequencies, useStoreTransactions } from "../../store";
import { formatAmountWithColor } from "../../utils/currency";

const defaultPeriod = () => dayjs().startOf("month").format("YYYY-MM");

export function useTransactions() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | undefined>(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [period, setPeriod] = useState<string>(() => defaultPeriod());

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

  const columns: FilterableColumnDef<Transaction>[] = useMemo(
    () => [
      {
        accessorKey: "dueAt",
        header: "Date",
        cell: ({ row }) => new Date(row.original.dueAt).toLocaleDateString(),
      },
      {
        accessorKey: "category",
        header: "Catégorie",
        cell: ({ row }) => (row.original.categoryId ? `${row.original.category?.label}` : "Aucune catégorie"),
        enableFiltering: true,
        options: {
          filterOptions: categories.map((cat) => ({
            id: cat.id,
            label: cat.label,
          })),
          filterEmptyLabel: "Toutes",
        },
      },
      {
        accessorKey: "amount",
        header: "Montant",
        cell: ({ row }) => formatAmountWithColor(row.original.amount),
        enableFiltering: true,
        options: {
          filterPlaceholder: "",
        },
        currency: true,
      },
      {
        accessorKey: "label",
        header: "Libellé",
        enableFiltering: true,
        options: {
          filterPlaceholder: "Rechercher un libellé...",
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
    [getActions, categories],
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
    categories,
  };
}
