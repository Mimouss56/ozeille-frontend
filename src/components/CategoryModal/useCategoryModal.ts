import { useEffect, useState } from "react";

import { type CategoryEditFormState, categorySchema } from "../../@types/category.d";
import type { Category, CreateCategoryDto } from "../../api/categories";
import { useStoreBudgets, useStoreCategories } from "../../store";

const INITIAL_STATE: CreateCategoryDto = {
  label: "",
  budgetId: "",
  color: "#F0F",
  limitAmount: 0,
  type: "EXPENSE",
};

const getFormStateFromCategory = (category?: Category): CategoryEditFormState => ({
  label: category?.id ? category.label : INITIAL_STATE.label,
  limitAmount: category?.limitAmount ?? INITIAL_STATE.limitAmount,
  budgetId: category?.budgetId ?? INITIAL_STATE.budgetId,
  color: category?.color ?? INITIAL_STATE.color,
  type: category?.id ? category.type : "EXPENSE",
});

export const useCategoryModal = (category?: Category) => {
  // Stores
  const { createNewCategory, updateCurrentCategory } = useStoreCategories();
  const { budgets } = useStoreBudgets();

  // État local du formulaire
  const [formState, setFormState] = useState<CategoryEditFormState>(() => getFormStateFromCategory(category));
  const [errors, setErrors] = useState<Partial<Record<keyof CreateCategoryDto, string>>>({});

  const handleChange = (field: keyof CreateCategoryDto, value: string | number) => {
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
    getFormStateFromCategory(category);
    setErrors({});
  };

  const handleSubmit = async (): Promise<boolean> => {
    // 3. Validation avec Zod
    const result = categorySchema.safeParse(formState);

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
      if (category?.id) {
        await updateCurrentCategory(category.id, formState);
      } else {
        await createNewCategory(formState);
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

  useEffect(() => {
    setFormState(getFormStateFromCategory(category));
  }, [category]);

  return {
    formState,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    budgetOptions: budgets.map((b) => ({ label: b.label, value: b.id })),
  };
};
