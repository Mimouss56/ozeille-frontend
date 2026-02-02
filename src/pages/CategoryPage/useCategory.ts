import { TrashIcon } from "@phosphor-icons/react";
import { type ColumnDef } from "@tanstack/react-table";
import { createElement, useMemo } from "react";

import type { Category } from "../../api/categories";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { Dot } from "../../components/Pastille/Dot";
import { useStoreCategories } from "../../store/categoriesStore";

export function useCategory() {
  const { deleteCategoryById } = useStoreCategories();

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
        cell: ({ row }) => row.original.budget?.label,
      },
      {
        accessorKey: "limitAmount",
        header: "Plafond",
        cell: ({ row }) => `${row.original.limitAmount} €`,
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const actions: MenuAction[] = [
            {
              style: "outline",
              render: createElement(CategoryModal, { category: row.original }),
              label: "",
            },
            {
              label: "Supprimer",
              icon: TrashIcon,
              style: "dangerOutline",
              onClick: () => deleteCategoryById(row.original.id),
            },
          ];

          return createElement(ActionMenu, { actions });
        },
      },
    ],
    [deleteCategoryById],
  );

  return { columns };
}
