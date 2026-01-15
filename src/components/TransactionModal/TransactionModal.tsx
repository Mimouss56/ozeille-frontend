import { useEffect, useState } from "react";
import { z } from "zod";

import { useCategories } from "../../store/categoriesStore.ts";
import { useFrequencies } from "../../store/frequenciesStore.ts";
import { useStoreTransactions } from "../../store/transactionsStore.ts";
import { InputField } from "../InputField/InputField.tsx";
import Modal from "../Modal/Modal.tsx";
import { Select } from "../Select/Select.tsx";

interface TransactionFormState {
  label: string;
  amount: string;
  dueAt: string;
  categoryId: string;
  frequencyId: string;
}

const transactionSchema = z.object({
  label: z.string().min(1, "Le label est requis"),
  amount: z
    .string()
    .min(1, "Le montant est requis")
    .refine((value) => !isNaN(Number(value)), "Le montant doit être un nombre"),
  dueAt: z.string().min(1, "La date est requise"), // Ou .date() si vous voulez être strict sur le format
  categoryId: z.string().min(1, "Veuillez sélectionner une catégorie"),
  frequencyId: z.string().min(1, "Veuillez sélectionner une fréquence"),
});

export const TransactionModal = () => {
  const { fetchCategories, categoriesOptions: categories } = useCategories();
  const { fetchFrequencies, frequenciesOptions: frequencies } = useFrequencies();
  const { createNewTransaction: createTransaction } = useStoreTransactions();

  const [formState, setFormState] = useState<TransactionFormState>({
    label: "",
    amount: "",
    dueAt: "",
    categoryId: "",
    frequencyId: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof TransactionFormState) => (value: string) => {
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

  const resetForm = () => {
    setFormState({ label: "", amount: "", dueAt: "", categoryId: "", frequencyId: "" });
    setErrors({});
  };

  useEffect(() => {
    void fetchCategories();
    void fetchFrequencies();
  }, [fetchCategories, fetchFrequencies]);

  const handleSubmit = async (): Promise<boolean> => {
    const result = transactionSchema.safeParse(formState);

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

    try {
      await createTransaction({
        ...formState,
        amount: Number(formState.amount),
        dueAt: new Date(formState.dueAt).toISOString(),
      });
      resetForm();
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
      title="Créer une nouvelle transaction"
      cancelLabel="Annuler"
      actionLabel="Créer une nouvelle transaction"
      onCancel={resetForm}
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
