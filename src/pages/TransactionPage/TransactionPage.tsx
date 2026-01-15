import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { DotsThree } from "phosphor-react";
import { useEffect, useState } from "react";

import type { Transaction } from "../../api/transactions.ts";
import { DataTable } from "../../components/Table/DataTable.tsx";
import { TransactionDeleteModal } from "../../components/TransactionModal/TransactionDeleteModal.tsx";
import { TransactionEditModal } from "../../components/TransactionModal/TransactionEditModal.tsx";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal.tsx";
import { useTransactions } from "../../store/transactionsStore";

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "dueAt",
    header: "Date",
    cell: ({ row }) => new Date(row.original.dueAt).toLocaleDateString(),
  },
  // {
  //   accessorKey: "category",
  //   header: "Category",
  //   cell: ({ row }) => <p>{row.original.category.label}</p>,
  // },
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
            <TransactionEditModal transaction={row.original} />
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
  const [limit, _setLimit] = useState(10);
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });
  const transactions = useTransactions.use.transactions();
  const meta = useTransactions.use.meta();
  const getTransactions = useTransactions.use.fetchTransactions();

  useEffect(() => {
    void getTransactions({ limit, page: page.pageIndex + 1 });
  }, [getTransactions, limit, page.pageIndex]);

  return (
    <div className="flex h-full flex-col gap-4">
      <h1>Transaction Page</h1>
      <div className="flex justify-end gap-4">
        <TransactionModal />
      </div>
      <DataTable
        pageSize={limit}
        data={transactions}
        columns={columns}
        currentPage={page}
        setCurrentPage={setPage}
        totalPage={meta.totalPages}
        paginated
      />
    </div>
  );
};
