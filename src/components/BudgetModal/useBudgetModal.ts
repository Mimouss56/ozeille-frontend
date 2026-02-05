import { useEffect, useState } from "react";

import { type BudgetEditFormState, type BudgetFormState, budgetEditSchema } from "../../@types/budget.d";
import type { Budget } from "../../api/budgets";
import { useStoreBudgets } from "../../store";

const initForm: BudgetFormState = {
  label: "",
  color: "#F0F",
};

const getFormStateFromBudget = (budget?: Budget): BudgetEditFormState => ({
  label: budget?.id ? budget.label : initForm.label,
  color: budget?.id ? budget.color : initForm.color,
});

export const useBudgetModal = (budget?: Budget) => {
  const { updateCurrentBudget, createNewBudget } = useStoreBudgets();
  const [formState, setFormState] = useState<BudgetEditFormState>(() => getFormStateFromBudget(budget));
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormState(getFormStateFromBudget(budget));
  }, [budget]);

  const handleChange = (field: keyof BudgetEditFormState) => (value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };
  const resetForm = () => {
    setFormState(getFormStateFromBudget(budget));
    setErrors({});
  };

  const handleSubmit = async (): Promise<boolean> => {
    const result = budgetEditSchema.safeParse(formState);
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

    const updatedBudget = {
      ...formState,
      label: formState.label,
      color: formState.color,
    };

    try {
      if (budget?.id && updatedBudget) {
        await updateCurrentBudget(budget.id, updatedBudget);
      } else {
        await createNewBudget({
          ...formState,
        });
      }
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

  return {
    handleSubmit,
    resetForm,
    errors,
    formState,
    handleChange,
    setFormState,
  };
};
