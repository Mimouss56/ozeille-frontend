import { TrashIcon } from "@phosphor-icons/react";

import type { Transaction } from "../../api/transactions.ts";
import { useStoreTransactions } from "../../store/transactionsStore.ts";
import Modal from "../Modal/Modal.tsx";

export const TransactionDeleteModal = ({ transaction }: { transaction: Transaction }) => {
  const { deleteTransactionById: deleteTransaction } = useStoreTransactions();

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
          <TrashIcon size={16} /> Supprimer
        </>
      }
      cancelLabel="Annuler"
      confirmLabel="Ok"
      style="dangerOutline"
      onConfirm={handleDelete}>
      <p>Êtes vous sûre de vouloire supprimer la transaction: {transaction.label}?</p>
    </Modal>
  );
};
