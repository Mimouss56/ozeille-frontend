import type { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import type { Transaction } from "../../api/transactions.ts";
import { Button } from "../../components/Button/Button.tsx";
import { InputText } from "../../components/InputText/InputText.tsx";
import { DataTable } from "../../components/Table/DataTable.tsx";
import { useTransactions } from "../../store/transactionsStore";

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "dueAt",
    header: "Date",
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
        <InputText
          placeholder="Search"
          id="searchValue"
          name="searchValue"
          value={searchValue}
          onChange={(value: string) => setSearchValue(value)}
        />
        <Button>Add a new transaction</Button>
      </div>
      <DataTable data={transactions} columns={columns} paginated />
    </div>
  );
};
