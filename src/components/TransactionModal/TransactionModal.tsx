import type { Transaction } from "../../api/transactions.ts";
import { InputField } from "../InputField/InputField.tsx";
import Modal from "../Modal/Modal.tsx";
import { Select } from "../Select/Select.tsx";
import { useTransactionModal } from "./useTransactionModal.ts";

interface TransactionModalProps {
  transaction?: Transaction;
  onClose: () => void;
}

export const TransactionModal = ({ transaction, onClose }: TransactionModalProps) => {
  const { handleSubmit, formState, errors, handleChange, categoriesOptions, frequencies, loading } =
    useTransactionModal(transaction);

  return (
    <Modal
      loading={loading}
      isOpen={true}
      onClose={onClose}
      onCancel={onClose}
      title={transaction?.id ? "Éditer une transaction" : "Créer une nouvelle transaction"}
      cancelLabel="Annuler"
      confirmLabel={transaction?.id ? "Modifier" : "Créer"}
      onConfirm={handleSubmit}>
      <form className="flex flex-col gap-4">
        <InputField
          label="Label"
          name="label"
          id="transaction_label"
          value={formState.label}
          placeholder="Label"
          onChange={handleChange("label")}
          style={errors.label ? "error" : "neutral"}
          helperText={errors.label}
        />
        <div className="flex gap-4">
          <div className="flex-1">
            <InputField
              label="Montant"
              name="amount"
              id="transaction_amount"
              value={formState.amount}
              type="number"
              placeholder="Montant"
              onChange={handleChange("amount")}
              style={errors.amount ? "error" : "neutral"}
              helperText={errors.amount}
            />
          </div>
          <div className="flex-1">
            <InputField
              label="Due le"
              name="dueAt"
              id="transaction_dueAt"
              value={formState.dueAt}
              type="date"
              placeholder="Due le"
              onChange={handleChange("dueAt")}
              style={errors.dueAt ? "error" : "neutral"}
              helperText={errors.dueAt}
            />
          </div>
        </div>

        <Select
          id="transaction_category"
          name="category"
          label="Categorie"
          options={categoriesOptions}
          placeholder="Choisir une categorie"
          style={errors.categoryId ? "error" : "neutral"}
          value={formState.categoryId}
          onChange={(e) => handleChange("categoryId")(e.target.value)}
          helperText={errors.categoryId}
        />
        <Select
          id="transaction_frequency"
          name="frequency"
          label="Fréquence"
          options={frequencies}
          placeholder="Choisir une fréquence"
          style={errors.frequencyId ? "error" : "neutral"}
          value={formState.frequencyId || ""}
          onChange={(e) => handleChange("frequencyId")(e.target.value)}
          helperText={errors.frequencyId}
        />
      </form>
    </Modal>
  );
};
