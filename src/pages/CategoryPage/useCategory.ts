import { type PaginationState } from "@tanstack/react-table";
import dayjs from "dayjs";
import { createElement, useCallback, useEffect, useMemo, useState } from "react";

import type { Category } from "../../api/categories";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { Dot } from "../../components/Pastille/Dot";
import type { ColumnDef } from "../../components/Table/DataTable/DataTable";
import { useStoreCategories } from "../../store/categoriesStore";

const defaultPeriod = () => dayjs().startOf("month").format("YYYY-MM");

export function useCategory() {
  const { deleteCategoryById, fetchCategories, meta, categories } = useStoreCategories();
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [period, setPeriod] = useState<string>(() => defaultPeriod());

  const limit = 50;
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });

  const handlePeriodChange = useCallback(
    (value: string) => {
      setPeriod(value);
      const to = dayjs(value, "YYYY-MM").endOf("month").format("YYYY-MM-DD");
      fetchCategories({ limit, page: page.pageIndex + 1, expand: "transactions", to });
    },
    [fetchCategories, page.pageIndex],
  );

  const handleCreate = useCallback(() => {
    setSelectedCategory(undefined);
    setIsEditModalOpen(true);
  }, []);

  const handleEdit = useCallback((category: Category) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsEditModalOpen(false);
    setSelectedCategory(undefined);
  }, []);

  useEffect(() => {
    fetchCategories({ limit, page: page.pageIndex + 1, expand: "transactions" });
  }, [fetchCategories, page.pageIndex]);

  const getActions = useCallback(
    (category: Category): MenuAction[] => [
      {
        label: "Éditer",
        style: "outline",
        onClick: () => handleEdit(category),
      },
      {
        label: "Supprimer",
        style: "dangerOutline",
        onClick: () => {
          deleteCategoryById(category.id);
        },
      },
    ],
    [handleEdit, deleteCategoryById],
  );

  const columns: ColumnDef<Category>[] = useMemo(
    () => [
      {
        accessorKey: "label",
        header: "Nom",
        cell: ({ row }) => row.original.label,
      },
      {
        accessorKey: "color",
        header: "Couleur",
        cell: ({ row }) => createElement(Dot, { color: row.original.color || "#F0F0F0" }),
      },
      {
        accessorKey: "budgetId",
        header: "Budget",
        cell: ({ row }) => (row.original.budgetId ? row.original.budget?.label : "Coucou mouss"),
      },
      {
        accessorKey: "limitAmount",
        header: "Plafond",
        cell: ({ row }) => `${row.original.limitAmount} €`,
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

  return {
    columns,
    categories,
    limit,
    page,
    setPage,
    meta,
    handleCreate,
    isEditModalOpen,
    closeModal,
    selectedCategory,
    period,
    handlePeriodChange,
  };
}
