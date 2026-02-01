import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { type ColumnDef } from "@tanstack/react-table";
import { createElement, useMemo } from "react";

import type { Category } from "../../api/categories";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { useStoreCategories } from "../../store/categoriesStore";

export function useCategory(
  options: {
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    category?: Category;
  } = {},
) {
  const { deleteCategoryById } = useStoreCategories();
  const actions: MenuAction[] = useMemo(
    () => [
      {
        label: "Éditer catégorie",
        icon: PencilSimpleIcon,
        style: "ghostOutline",
        onClick: () =>
          createElement(CategoryModal, {
            category: options.category,
          }),
      },
      {
        label: "Supprimer",
        icon: TrashIcon,
        style: "ghostOutline",
        variant: "danger",
        onClick: () => deleteCategoryById(options.category!.id),
      },
    ],
    [deleteCategoryById, options.category],
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
        cell: ({ row }) => row.original.color,
      },
      {
        accessorKey: "budgetId",
        header: "Budget",
        cell: ({ row }) => row.original.budget?.label,
      },
      {
        accessorKey: "limitAmount",
        header: "Plafond",
        cell: ({ row }) => `${row.original.limitAmount} €`,
      },

      {
        header: "Actions",
        size: 10,
        cell: () => ActionMenu({ actions }),
      },
    ],
    [actions],
  );

  return { columns };
}
