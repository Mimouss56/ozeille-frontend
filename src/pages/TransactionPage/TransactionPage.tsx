import type { ColumnDef } from "@tanstack/react-table";
import { DotsThree, Pencil } from "phosphor-react";
import { useEffect, useState } from "react";

import type { Transaction } from "../../api/transactions.ts";
import { Button } from "../../components/Button/Button.tsx";
import { InputField } from "../../components/InputField/InputField.tsx";
import { DataTable } from "../../components/Table/DataTable.tsx";
import { TransactionDeleteModal } from "../../components/TransactionModal/TransactionDeleteModal.tsx";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal.tsx";
import { useTransactions } from "../../store/transactionsStore";

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "dueAt",
    header: "Date",
    cell: ({ row }) => new Date(row.original.dueAt).toLocaleDateString(),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <p>{row.original.category.label}</p>,
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
    cell: ({ row }) => (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <DotsThree size={24} />
        </div>
        <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <Button style="ghost">
              <Pencil size={16} /> Edit
            </Button>
          </li>
          <li>
            <TransactionDeleteModal transaction={row.original} />
          </li>
        </ul>
      </div>
    ),
  },
];

export const TransactionPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const transactions = useTransactions.use.transactions();
  // const meta = useTransactions.use.meta();
  const getTransactions = useTransactions.use.fetchTransactions();

  useEffect(() => {
    void getTransactions();
  }, [getTransactions]);

  return (
    <div className="flex h-full flex-col gap-4">
      <h1>Transaction Page</h1>
      <div className="flex gap-4">
        <InputField
          placeholder="Rechercher"
          id="searchValue"
          name="searchValue"
          label="Rechercher"
          value={searchValue}
          onChange={(value: string) => setSearchValue(value)}
        />
        <TransactionModal />
      </div>
      <DataTable data={transactions} columns={columns} paginated />
    </div>
  );
};
