import type { PaginationState } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import { DataTable } from "../../components/Table/DataTable.tsx";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal.tsx";
import { useStoreTransactions } from "../../store/transactionsStore.ts";
import { useTransactions } from "./useTransactions.ts";

export const TransactionPage = () => {
  const { columns } = useTransactions();
  const limit = 10;
  // const [limit, _setLimit] = useState(10);
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });

  const { fetchTransactions, meta, transactions } = useStoreTransactions();

  useEffect(() => {
    fetchTransactions({ limit, page: page.pageIndex + 1 });
  }, [fetchTransactions, limit, page.pageIndex]);

  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
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
