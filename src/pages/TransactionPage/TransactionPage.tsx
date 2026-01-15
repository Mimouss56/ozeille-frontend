import type { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import type { Transaction } from "../../api/transactions.ts";
import { InputField } from "../../components/InputField/InputField.tsx";
import { DataTable } from "../../components/Table/DataTable.tsx";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal.tsx";
import { useTransactions } from "../../store/transactionsStore";

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "dueAt",
    header: "Date",
    cell: ({ row }) => new Date(row.original.dueAt).toLocaleDateString(),
  },
  {
    accessorKey: "amount",
    header: "Montant",
  },
  {
    accessorKey: "label",
    header: "Label",
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
