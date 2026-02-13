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
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  const { fetchTransactions, meta, transactions } = useStoreTransactions();
  const { fetchCategoriesOptions, categoriesOptions } = useStoreCategories();
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
  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategoryId(value);
    setPage((prev) => ({ ...prev, pageIndex: 0 }));
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedCategoryId("");
    setPage({ pageIndex: 0, pageSize: limit });
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
        cell: ({ row }) => (row.original.categoryId ? `${row.original.category?.label}` : "Aucune catégorie"),
        enableFiltering: true,
        options: {
          filterOptions: categoriesOptions.map((cat) => ({
            value: cat.value.toString(),
            label: cat.label,
          })),
          filterEmptyLabel: "Toutes",
          isServerSide: true,
          onChange: handleCategoryChange,
        },
      },
      {
        accessorKey: "amount",
        header: "Montant",
        cell: ({ row }) => formatAmountWithColor(row.original.amount),
        enableFiltering: true,
        options: {
          filterPlaceholder: "Montant",
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
    [categoriesOptions, handleCategoryChange, getActions],
  );
  useEffect(() => {
    if (categoriesOptions.length === 0) fetchCategoriesOptions();
    if (frequencies.length === 0) fetchFrequencies();
  }, [categoriesOptions.length, fetchCategoriesOptions, fetchFrequencies, frequencies.length]);

  useEffect(() => {
    fetchTransactions({ limit, page: page.pageIndex + 1, categoryId: selectedCategoryId || undefined });
  }, [fetchTransactions, limit, page.pageIndex, selectedCategoryId]);

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
    resetFilters,
  };
}
