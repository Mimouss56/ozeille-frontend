import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { createElement, useCallback, useEffect, useMemo, useState } from "react";

import type { Transaction } from "../../api/transactions";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { useStoreCategories, useStoreFrequencies, useStoreTransactions } from "../../store";

export function useTransactions() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | undefined>(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { fetchTransactions, meta, transactions } = useStoreTransactions();
  const { fetchCategories, categories } = useStoreCategories();
  const { fetchFrequencies, frequencies } = useStoreFrequencies();
  const limit = 10;
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });
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
        header: "Catégorie",
        cell: ({ row }) => (row.original.categoryId ? `${row.original.category?.label}` : "Aucune catégorie"),
      },
      {
        accessorKey: "amount",
        header: "Montant",
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
        header: "Libellé",
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          return createElement(ActionMenu, { actions: getActions(row.original) });
        },
      },
    ],
    [getActions],
  );
  useEffect(() => {
    if (categories.length === 0) fetchCategories();
    if (frequencies.length === 0) fetchFrequencies();
  }, [categories.length, fetchCategories, fetchFrequencies, frequencies.length]);

  useEffect(() => {
    fetchTransactions({ limit, page: page.pageIndex + 1 });
  }, [fetchTransactions, limit, page.pageIndex]);

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
  };
}
