import { TrashIcon } from "@phosphor-icons/react";
import { useEffect } from "react";

import type { Transaction } from "../../api/transactions.ts";
import { useStoreTransactions } from "../../store/transactionsStore.ts";
import Modal from "../Modal/Modal.tsx";

export const TransactionDeleteModal = ({ transaction }: { transaction: Transaction }) => {
  const { deleteTransactionById: deleteTransaction, fetchTransactionById: getTransactionById } = useStoreTransactions();

  useEffect(() => {
    getTransactionById(transaction.id);
  }, [transaction.id, getTransactionById]);

  const handleDelete = async () => {
    try {
      await deleteTransaction(transaction.id);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <Modal
      title={`Delete Transaction: ${transaction.label}`}
      actionLabel={
        <>
          <TrashIcon size={16} /> Delete
        </>
      }
      cancelLabel="Annuler"
      confirmLabel="Ok"
      style="dangerOutline"
      onConfirm={handleDelete}>
      <p>Are you sure to delete transaction: {transaction.label}?</p>
    </Modal>
  );
};
