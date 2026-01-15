import { Pencil } from "phosphor-react";
import { useEffect, useState } from "react";

import type { Transaction } from "../../api/transactions.ts";
import { useCategories } from "../../store/categoriesStore.ts";
import { useFrequencies } from "../../store/frequenciesStore.ts";
import { useStoreTransactions } from "../../store/transactionsStore.ts";
import { InputField } from "../InputField/InputField.tsx";
import Modal from "../Modal/Modal.tsx";
import { Select } from "../Select/Select.tsx";
import { type TransactionEditFormState, transactionEditSchema } from "./type.ts";

export const TransactionEditModal = ({ transaction }: { transaction: Transaction }) => {
  const categories = useCategories.use.categoriesOptions();
  const fetchCategories = useCategories.use.fetchCategories();

  const frequencies = useFrequencies.use.frequenciesOptions();
  const fetchFrequencies = useFrequencies.use.fetchFrequencies();

  const updateTransaction = useStoreTransactions.use.updateCurrentTransaction();

  const [formState, setFormState] = useState<TransactionEditFormState>({
    label: transaction.label,
    amount: transaction.amount.toString(),
    dueAt: new Date(transaction.dueAt).toISOString().slice(0, 10),
    categoryId: transaction.category.id,
    pointedAt: transaction.pointedAt ? new Date(transaction.pointedAt).toISOString().slice(0, 10) : "",
    frequencyId: transaction.frequencyId,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof TransactionEditFormState) => (value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    // Optionnel : Effacer l'erreur du champ quand l'utilisateur le modifie
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  useEffect(() => {
    void fetchCategories();
    void fetchFrequencies();
  }, [fetchCategories, fetchFrequencies]);

  const resetForm = () => {
    setErrors({});
  };

  const handleSubmit = async (): Promise<boolean> => {
    const result = transactionEditSchema.safeParse(formState);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return false;
    }

    const updatedTransaction = {
      ...formState,
      amount: Number(formState.amount),
      dueAt: new Date(formState.dueAt).toISOString(),
      pointedAt: new Date(formState.pointedAt).toISOString(),
    };

    try {
      await updateTransaction(transaction.id, updatedTransaction);
      return true;
    } catch (error: unknown) {
      const errors = error as { errors: { property: string; message: string }[] };
      for (const err of errors.errors) {
        setErrors((prevErrors) => ({ ...prevErrors, [err.property]: err.message }));
      }
      return false;
    }
  };

  return (
    <Modal
      title="Éditer une transaction"
      cancelLabel="Annuler"
      actionLabel={
        <>
          <Pencil size={16} /> Edit
        </>
      }
      style="ghost"
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
        <Select
          id="transaction_category"
          name="category"
          label="Categorie"
          options={categories}
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
          value={formState.frequencyId}
          onChange={(e) => handleChange("frequencyId")(e.target.value)}
          helperText={errors.frequencyId}
        />
      </form>
    </Modal>
  );
};
