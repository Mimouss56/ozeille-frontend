import { type ColumnDef, type PaginationState } from "@tanstack/react-table";
import { createElement, useCallback, useEffect, useMemo, useState } from "react";

import type { Category } from "../../api/categories";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { Dot } from "../../components/Pastille/Dot";
import { useStoreCategories } from "../../store/categoriesStore";

export function useCategory() {
  const { deleteCategoryById, fetchCategories, meta, categories } = useStoreCategories();
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const limit = 10;
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });
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
    fetchCategories({ limit, page: page.pageIndex + 1 });
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
        onClick: () => deleteCategoryById(category.id),
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
  };
}
