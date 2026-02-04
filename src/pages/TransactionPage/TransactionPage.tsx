import { PencilIcon } from "@phosphor-icons/react";
import type { PaginationState } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import { Button } from "../../components/Button/Button";
import { DataTable } from "../../components/Table/DataTable.tsx";
import { TransactionDeleteModal } from "../../components/TransactionModal/TransactionDeleteModal.tsx";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal.tsx";
import { useTransactions } from "./useTransactions.ts";

export const TransactionPage = () => {
  const {
    columns,
    fetchTransactions,
    meta,
    transactions,
    isEditModalOpen,
    isDeleteModalOpen,
    selectedTransaction,
    handleCreate,
    closeModals,
  } = useTransactions();

  const limit = 10;
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });

  useEffect(() => {
    fetchTransactions({ limit, page: page.pageIndex + 1 });
  }, [fetchTransactions, limit, page.pageIndex]);

  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-neutral text-2xl font-bold">Transactions</h1>

      <div className="flex justify-end gap-4">
        <Button onClick={handleCreate} icon={PencilIcon}>
          Nouvelle Transaction
        </Button>
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

      {isEditModalOpen && <TransactionModal transaction={selectedTransaction} onClose={closeModals} />}

      {isDeleteModalOpen && selectedTransaction && (
        <TransactionDeleteModal transaction={selectedTransaction} onClose={closeModals} />
      )}
    </div>
  );
};
