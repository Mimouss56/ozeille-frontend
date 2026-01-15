import { Trash } from "phosphor-react";
import { useEffect } from "react";

import type { Transaction } from "../../api/transactions.ts";
import { useStoreTransactions } from "../../store/transactionsStore.ts";
import Modal from "../Modal/Modal.tsx";

export const TransactionDeleteModal = ({ transaction }: { transaction: Transaction }) => {
  const getTransactionById = useStoreTransactions.use.fetchTransactionById();
  const deleteTransaction = useStoreTransactions.use.deleteTransactionById();

  useEffect(() => {
    void getTransactionById(transaction.id);
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
          <Trash size={16} /> Delete
        </>
      }
      cancelLabel="Annuler"
      confirmLabel="Ok"
      style="ghost"
      onConfirm={handleDelete}>
      <p>Are you sure to delete transaction: {transaction.label}?</p>
    </Modal>
  );
};
