import type { ColumnDef } from "@tanstack/react-table";
import { PencilSimple, Trash } from "phosphor-react";
import { createElement, useMemo } from "react";

import type { Transaction } from "../../api/transactions";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { TransactionDeleteModal } from "../../components/TransactionModal/TransactionDeleteModal";
import { TransactionEditModal } from "../../components/TransactionModal/TransactionEditModal";

export function useTransactions(
  options: {
    onEdit?: (id: string) => void;
    onEditBudget?: (transaction: Transaction) => void;
    onDelete?: (id: string) => void;
    transaction?: Transaction;
  } = {},
) {
  const actions: MenuAction[] = useMemo(
    () => [
      {
        label: "Éditer transaction",
        icon: createElement(PencilSimple, { size: 16 }),
        onClick: () => TransactionEditModal({ transaction: options.transaction! }),
      },
      {
        label: "Supprimer",
        icon: createElement(Trash, { size: 16 }),
        variant: "danger",
        onClick: () => TransactionDeleteModal({ transaction: options.transaction! }),
      },
    ],
    [options],
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
        header: "Category",
        cell: ({ row }) => row.original.category.label,
      },
      {
        accessorKey: "amount",
        header: "Montant",
      },
      {
        accessorKey: "label",
        header: "Label",
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
