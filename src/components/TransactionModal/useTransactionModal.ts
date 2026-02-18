import { useEffect, useState } from "react";

import { type TransactionEditFormState, transactionEditSchema, transactionSchema } from "../../@types/transaction.d";
import type { Transaction, UpdateTransactionDto } from "../../api/transactions";
import { useStoreCategories, useStoreFrequencies, useStoreTransactions } from "../../store";

interface TransactionFormState {
  label: string;
  amount: string;
  dueAt: string;
  categoryId: string;
  frequencyId: string;
  pointedAt: string;
}
const initForm: TransactionFormState = {
  label: "",
  amount: "",
  dueAt: "",
  categoryId: "",
  frequencyId: "",
  pointedAt: "",
};

const getFormStateFromTransaction = (transaction?: Transaction): TransactionEditFormState => ({
  label: transaction?.id ? transaction.label : initForm.label,
  amount: transaction?.id ? transaction.amount.toString() : initForm.amount,
  dueAt: transaction?.id ? new Date(transaction.dueAt).toISOString().slice(0, 10) : initForm.dueAt,
  categoryId: transaction?.id ? transaction.category?.id : "",
  pointedAt: transaction?.pointedAt ? new Date(transaction.pointedAt).toISOString().slice(0, 10) : initForm.pointedAt,
  frequencyId: transaction?.id ? transaction.frequencyId : initForm.frequencyId,
});

export const useTransactionModal = (transaction?: Transaction) => {
  const { categoriesOptions, fetchCategoriesOptions } = useStoreCategories();
  const { frequenciesOptions: frequencies } = useStoreFrequencies();
  const {
    updateCurrentTransaction: updateTransaction,
    createNewTransaction: createTransaction,
    loading,
  } = useStoreTransactions();

  const [formState, setFormState] = useState<TransactionEditFormState>(() => getFormStateFromTransaction(transaction));
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (categoriesOptions.length == 0) {
      fetchCategoriesOptions({ limit: 100, page: 1 });
    }
  }, [categoriesOptions.length, fetchCategoriesOptions]);
  // Synchroniser le formState quand la transaction change
  useEffect(() => {
    setFormState(getFormStateFromTransaction(transaction));
  }, [transaction]);

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

  const resetForm = () => {
    setFormState(getFormStateFromTransaction(transaction));
    setErrors({});
  };

  const handleSubmit = async (): Promise<boolean> => {
    const result = transaction?.id
      ? transactionEditSchema.safeParse(formState)
      : transactionSchema.safeParse(formState);

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

    let updatedTransaction: UpdateTransactionDto | undefined;
    if (transaction?.id) {
      updatedTransaction = {
        ...formState,
        amount: Number(formState.amount),
        dueAt: new Date(formState.dueAt).toISOString(),
        pointedAt: formState.pointedAt ? new Date(formState.pointedAt).toISOString() : null,
        frequencyId: formState.frequencyId && formState.frequencyId.trim() !== "" ? formState.frequencyId : null,
      };
    }

    try {
      if (transaction?.id && updatedTransaction) {
        await updateTransaction(transaction.id, updatedTransaction);
      } else {
        const createPayload = {
          ...formState,
          amount: Number(formState.amount),
          dueAt: new Date(formState.dueAt).toISOString(),
        };
        if (!createPayload.frequencyId || createPayload.frequencyId.trim() === "") {
          delete createPayload.frequencyId;
        }
        await createTransaction(createPayload);
        resetForm();
      }
      return true;
    } catch (error: unknown) {
      const errors = error as { errors: { property: string; message: string }[] };
      for (const err of errors.errors) {
        setErrors((prevErrors) => ({ ...prevErrors, [err.property]: err.message }));
      }
      return false;
    }
  };
  return {
    handleSubmit,
    resetForm,
    formState,
    errors,
    handleChange,
    categoriesOptions,
    frequencies,
    loading,
  };
};
