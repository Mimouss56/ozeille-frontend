import { PencilIcon } from "@phosphor-icons/react";

import type { Transaction } from "../../api/transactions.ts";
import { InputField } from "../InputField/InputField.tsx";
import Modal from "../Modal/Modal.tsx";
import { Select } from "../Select/Select.tsx";
import { useTransactionModal } from "./useTransactionModal.ts";

export const TransactionModal = ({ transaction }: { transaction?: Transaction }) => {
  const { handleSubmit, resetForm, formState, errors, handleChange, categoriesOptions, frequencies } =
    useTransactionModal(transaction);
  return (
    <Modal
      title={transaction?.id ? "Éditer une transaction" : "Créer une nouvelle transaction"}
      cancelLabel="Annuler"
      actionLabel={
        !transaction?.id ? (
          "Créer une nouvelle transaction"
        ) : (
          <>
            <PencilIcon size={16} /> Éditer la transaction
          </>
        )
      }
      style={!transaction?.id ? "primary" : "ghost"}
      onConfirm={handleSubmit}
      onCancel={resetForm}>
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
        {transaction?.id && (
          <InputField
            label="Pointé le"
            name="pointedAt"
            id="transaction_pointedAt"
            value={formState.pointedAt}
            type="date"
            placeholder="Pointé le"
            onChange={handleChange("pointedAt")}
            style={errors.pointedAt ? "error" : "neutral"}
            helperText={errors.pointedAt}
          />
        )}
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
