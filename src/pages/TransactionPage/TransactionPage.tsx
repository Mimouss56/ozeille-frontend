import { PencilIcon, WalletIcon } from "@phosphor-icons/react";

import { Button } from "../../components/Button/Button.tsx";
import { InputField } from "../../components/InputField/InputField.tsx";
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
    period,
    handlePeriodChange,
    filters,
    handleResetFilters,
  } = useTransactions();

  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-neutral text-2xl font-bold">Transactions</h1>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <InputField
          id="transaction-period"
          label="Période"
          name="period"
          type="month"
          value={period}
          onChange={handlePeriodChange}
          size="sm"
          placeholder=""
        />
        <div className="flex gap-2">
          {(filters.category || filters.label || filters.amount) && (
            <Button onClick={handleResetFilters} style="ghost" size="sm">
              Réinitialiser filtres
            </Button>
          )}
          <Button onClick={handleCreate} icon={PencilIcon}>
            Nouvelle Transaction
          </Button>
        </div>
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
