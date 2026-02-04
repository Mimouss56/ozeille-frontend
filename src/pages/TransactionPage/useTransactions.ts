import type { ColumnDef } from "@tanstack/react-table";
import { createElement, useCallback, useMemo } from "react";

import type { Transaction } from "../../api/transactions";
import { ActionMenu, type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { TransactionDeleteModal } from "../../components/TransactionModal/TransactionDeleteModal";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal";

export function useTransactions() {
  const getActions = useCallback(
    (transaction: Transaction): MenuAction[] => [
      {
        label: "Éditer",
        render: createElement(TransactionModal, { transaction }),
        style: "outline",
      },
      {
        label: "Supprimer",
        render: createElement(TransactionDeleteModal, { transaction }),
        style: "dangerOutline",
      },
    ],
    [],
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
          const isIncome = row.original.category.type === "INCOME";

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
