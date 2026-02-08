import { PencilIcon, WalletIcon } from "@phosphor-icons/react";

import { Button } from "../../components/Button/Button.tsx";
import { DataTable } from "../../components/Table/DataTable.tsx";
import { TransactionDeleteModal } from "../../components/TransactionModal/TransactionDeleteModal.tsx";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal.tsx";
import { EmptyCard } from "../../components/Widgets/EmptyCard/EmptyCard.tsx";
import { useTransactions } from "./useTransactions.ts";

export const TransactionPage = () => {
  const {
    columns,
    meta,
    transactions,
    isEditModalOpen,
    isDeleteModalOpen,
    selectedTransaction,
    handleCreate,
    closeModals,
    page,
    setPage,
    limit,
  } = useTransactions();

  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-neutral text-2xl font-bold">Transactions</h1>

      <div className="flex justify-end gap-4">
        <Button onClick={handleCreate} icon={PencilIcon}>
          Nouvelle Transaction
        </Button>
      </div>
      {transactions.length === 0 && (
        <EmptyCard icon={WalletIcon} label="Aucune transaction" subtitle={"Ajouter une nouvelle transaction"} />
      )}

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
