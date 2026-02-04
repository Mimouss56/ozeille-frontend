import type { ColumnDef } from "@tanstack/react-table";
import { createElement, useCallback, useMemo } from "react";

import type { Transaction } from "../../api/transactions";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";

interface UseTransactionsProps {
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

export function useTransactions({ onEdit, onDelete }: UseTransactionsProps) {
  const getActions = useCallback(
    (transaction: Transaction): MenuAction[] => [
      {
        label: "Éditer",
        // render: createElement(TransactionModal, { transaction }),
        style: "outline",
        onClick: () => onEdit(transaction),
      },
      {
        label: "Supprimer",
        // render: createElement(TransactionDeleteModal, { transaction }),
        style: "dangerOutline",
        onClick: () => onDelete(transaction),
      },
    ],
    [onDelete, onEdit],
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

  return { columns };
}
