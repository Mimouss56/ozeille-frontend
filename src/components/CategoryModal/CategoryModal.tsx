import { PencilIcon, TrendDownIcon, TrendUpIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { type CategoryEditFormState, categorySchema } from "../../@types/category.d";
import type { Category, CreateCategoryDto } from "../../api/categories";
import { useStoreBudgets } from "../../store/budgetsStore";
import { useStoreCategories } from "../../store/categoriesStore";
import { Button } from "../Button/Button";
// Import direct du store
import { InputField } from "../InputField/InputField";
import Modal from "../Modal/Modal";
import { Select } from "../Select/Select";

const INITIAL_STATE: CreateCategoryDto = {
  label: "",
  budgetId: "",
  color: "#000000",
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

export const CategoryModal = ({ category }: { category?: Category }) => {
  // Stores
  const { createNewCategory, updateCurrentCategory } = useStoreCategories();
  const { budgets } = useStoreBudgets();

  // Mapping des budgets pour le Select
  const budgetOptions = budgets.map((b) => ({
    label: b.label,
    value: b.id,
  }));

  // État local du formulaire
  const [formState, setFormState] = useState<CategoryEditFormState>(() => getFormStateFromCategory(category));
  const [errors, setErrors] = useState<Partial<Record<keyof CreateCategoryDto, string>>>({});

  useEffect(() => {
    setFormState(getFormStateFromCategory(category));
  }, [category]);

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

  return (
    <Modal
      title={category?.id ? "Modifier la catégorie" : "Nouvelle catégorie"}
      actionLabel={
        !category?.id ? (
          "Créer une nouvelle catégorie"
        ) : (
          <>
            <PencilIcon size={16} /> Éditer catégorie
          </>
        )
      }
      confirmLabel={category ? "Enregistrer" : "Créer"}
      cancelLabel="Annuler"
      onConfirm={handleSubmit}
      style={!category?.id ? "primary" : "ghost"}>
      <form className="flex flex-col gap-4 py-2">
        <div className="bg-base-200 flex w-full justify-around gap-2 rounded-lg p-1">
          <Button
            style={formState.type === "EXPENSE" ? "danger" : "ghost"}
            icon={TrendDownIcon}
            onClick={() => handleChange("type", "EXPENSE")}>
            Dépense
          </Button>

          <Button
            style={formState.type === "INCOME" ? "primary" : "ghost"}
            icon={TrendUpIcon}
            onClick={() => handleChange("type", "INCOME")}>
            Revenu
          </Button>
        </div>
        <InputField
          id="category-label"
          name="label"
          label="Nom"
          value={formState.label}
          onChange={(val) => handleChange("label", val)}
          placeholder="Ex: Alimentation"
          helperText={errors.label}
          style={errors.label ? "error" : "neutral"}
        />

        <Select
          id="budgetId"
          label="Budget associé"
          value={formState.budgetId}
          onChange={(e) => handleChange("budgetId", e.target.value)}
          options={budgetOptions}
          placeholder="Sélectionner un budget"
          helperText={errors.budgetId} // Affiche l'erreur de validation ici
          style={errors.budgetId ? "error" : "neutral"} // Change le style en rouge si erreur
        />

        <div className="flex gap-4">
          <div className="pt-1">
            <input
              type="color"
              className="border-base-300 h-10 w-12 cursor-pointer rounded-lg border-2 p-1"
              value={formState.color || "#000000"}
              onChange={(e) => handleChange("color", e.target.value)}
            />
          </div>
          {formState.type === "EXPENSE" && (
            <div className="flex-1">
              <InputField
                id="category-limitAmount"
                name="limitAmount"
                label="Plafond (€)"
                type="number"
                value={formState.limitAmount?.toString() ?? ""}
                onChange={(val) => handleChange("limitAmount", parseFloat(val) || 0)}
                placeholder="0.00"
                helperText={errors.limitAmount}
              />
            </div>
          )}
        </div>
      </form>
    </Modal>
  );
};
