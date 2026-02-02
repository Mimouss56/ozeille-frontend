import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import type { Transaction } from "../../api/transactions";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { TransactionDeleteModal } from "../../components/TransactionModal/TransactionDeleteModal";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal";

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
        icon: PencilSimpleIcon,
        onClick: () => TransactionModal({ transaction: options.transaction! }),
        style: "ghostOutline",
      },
      {
        label: "Supprimer",
        icon: TrashIcon,
        variant: "danger",
        onClick: () => TransactionDeleteModal({ transaction: options.transaction! }),
        style: "dangerOutline",
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
