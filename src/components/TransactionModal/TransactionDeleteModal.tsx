import { TrashIcon } from "@phosphor-icons/react";

import type { Transaction } from "../../api/transactions.ts";
import { useStoreTransactions } from "../../store/transactionsStore.ts";
import Modal from "../Modal/Modal.tsx";

interface TransactionDeleteModalProps {
  transaction: Transaction;
  onClose: () => void;
}

export const TransactionDeleteModal = ({ transaction, onClose }: TransactionDeleteModalProps) => {
  const { deleteTransactionById } = useStoreTransactions();

  const handleDelete = async () => {
    try {
      await deleteTransactionById(transaction.id);
      return true; // Succès, Modal fermera
    } catch {
      return false; // Erreur, Modal reste ouverte
    }
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      onCancel={onClose}
      title={`Supprimer : ${transaction.label}`}
      cancelLabel="Annuler"
      confirmLabel="Supprimer"
      style="dangerOutline"
      onConfirm={handleDelete}>
      <div className="flex flex-col items-center gap-4 py-2 text-center">
        <div className="bg-error/10 text-error rounded-full p-3">
          <TrashIcon size={32} />
        </div>
        <p>
          Êtes-vous sûr de vouloir supprimer la transaction <br />
          <strong>{transaction.label}</strong> ?
        </p>
      </div>
    </Modal>
  );
};
