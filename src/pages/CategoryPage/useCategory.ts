import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { type ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import type { Category } from "../../api/categories";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { useCategoriesStore } from "../../store/categoriesStore";

export function useCategory(
  options: {
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    category?: Category;
  } = {},
) {
  const { deleteCategoryById } = useCategoriesStore();
  const actions: MenuAction[] = useMemo(
    () => [
      {
        label: "Éditer catégorie",
        icon: PencilSimpleIcon,
        onClick: () =>
          CategoryModal({
            category: options.category!,
          }),
      },
      {
        label: "Supprimer",
        icon: TrashIcon,
        variant: "danger",
        onClick: () => deleteCategoryById(options.category!.id),
      },
    ],
    [deleteCategoryById, options.category],
  );

  const columns: ColumnDef<Category>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: (info) => info.getValue(),
        enableSorting: false,
        enableColumnFilter: false,
        size: 50,
      },
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
        header: "Budget ID",
        cell: ({ row }) => row.original.budgetId,
      },
      {
        accessorKey: "limitAmount",
        header: "Plafond",
        cell: ({ row }) => row.original.limitAmount,
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
