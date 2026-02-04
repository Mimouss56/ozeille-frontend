import { PencilIcon } from "@phosphor-icons/react";
import type { PaginationState } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import type { Transaction } from "../../api/transactions";
import { Button } from "../../components/Button/Button";
import { DataTable } from "../../components/Table/DataTable.tsx";
import { TransactionDeleteModal } from "../../components/TransactionModal/TransactionDeleteModal.tsx";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal.tsx";
import { useStoreCategories } from "../../store/categoriesStore.ts";
import { useStoreFrequencies } from "../../store/frequenciesStore.ts";
import { useStoreTransactions } from "../../store/transactionsStore.ts";
import { useTransactions } from "./useTransactions.ts";

export const TransactionPage = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | undefined>(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleCreate = () => {
    setSelectedTransaction(undefined);
    setIsEditModalOpen(true);
  };

  const handleEdit = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsEditModalOpen(true);
  };

  const handleDelete = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsDeleteModalOpen(true);
  };

  const closeModals = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedTransaction(undefined);
  };

  const { columns } = useTransactions({ onEdit: handleEdit, onDelete: handleDelete });

  const limit = 10;
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });

  const { fetchTransactions, meta, transactions } = useStoreTransactions();
  const { fetchCategories, categories } = useStoreCategories();
  const { fetchFrequencies, frequencies } = useStoreFrequencies();

  useEffect(() => {
    fetchTransactions({ limit, page: page.pageIndex + 1 });
  }, [fetchTransactions, limit, page.pageIndex]);

  useEffect(() => {
    if (categories.length === 0) fetchCategories();
    if (frequencies.length === 0) fetchFrequencies();
  }, [categories.length, fetchCategories, fetchFrequencies, frequencies.length]);

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
