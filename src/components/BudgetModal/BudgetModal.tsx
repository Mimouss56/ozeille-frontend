import { Pencil } from "phosphor-react";
import { useState } from "react";

import type { Budget } from "../../api/budgets";
import { useStoreBudgets } from "../../store";
import { InputField } from "../InputField/InputField";
import { Label } from "../Label/Label";
import Modal from "../Modal/Modal";
import { type BudgetEditFormState, type BudgetFormState, budgetEditSchema } from "./types";

const initForm: BudgetFormState = {
  label: "",
  color: "",
};

export const BudgetModal = ({ budget }: { budget?: Budget }) => {
  const { updateCurrentBudget, createNewBudget } = useStoreBudgets();
  const [formState, setFormState] = useState<BudgetEditFormState>({
    label: budget?.label ? budget.label : initForm.label,
    color: budget?.color ? budget?.color : initForm.color,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

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
    setFormState(initForm);
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
      if (budget?.id) {
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

  return (
    <Modal
      title={budget?.id ? "Éditer un budget" : "Créer un nouveau budget"}
      cancelLabel="Annuler"
      actionLabel={
        !budget?.id ? (
          "Créer un nouveau budget"
        ) : (
          <>
            <Pencil size={16} /> Edit
          </>
        )
      }
      style={budget?.id ? "ghost" : "primary"}
      onConfirm={handleSubmit}
      onCancel={resetForm}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          {/* <Label>Nom du budget</Label> */}
          <InputField
            id="budget_label"
            name="label"
            type="text"
            label="Nom du budget"
            placeholder="Ex: Courses alimentaires"
            value={formState.label}
            style={errors.label ? "error" : "neutral"}
            helperText={errors.label}
            onChange={handleChange("label")}
          />
        </div>

        <div className="space-y-1">
          <Label>Couleur</Label>
          <div className="pt-1">
            <input
              type="color"
              className="border-base-300 h-12 w-12 rounded-lg border-2 p-1"
              value={formState.color}
              onChange={(e) => setFormState({ ...formState, color: e.target.value })}
            />
          </div>
        </div>

        {/* AMELIO peut-etre plus tard */}
        {/* <div className="space-y-1">
              <Label>Catégories (optionnel)</Label>
      
              {formData.categories.length > 0 && (
                <div className="mb-4 space-y-2">
                  {formData.categories.map((category) => (
                    <div key={category.id} className="flex items-center justify-between gap-2 rounded-lg border p-2">
                      <div className="flex-1">
                        <span className="font-medium">{category.label}</span>
                        <span className="text-neutral/70 ml-2 text-sm">{category.limitAmount} €</span>
                      </div>
                      <button type="button" className="" onClick={() => removeCategory(category.id)}>
                        <Trash size={24} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
      
              <div className="space-y-2 pt-2">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <InputText
                    id="category-name"
                    name="category-name"
                    placeholder="Ex: Fruits/Légumes"
                    value={newCategory.label}
                    onChange={(value) => setNewCategory({ ...newCategory, label: value })}
                    size="md"
                  />
                  <InputText
                    id="category-limit"
                    name="category-limit"
                    type="number"
                    placeholder="60"
                    value={newCategory.limitAmount.toString()}
                    onChange={(value) =>
                      setNewCategory({
                        ...newCategory,
                        limitAmount: Number(value) || 0,
                      })
                    }
                    size="md"
                  />
                </div>
                <button type="button" className="btn btn-primary btn-sm w-full sm:w-auto" onClick={addCategory}>
                  Ajouter une catégorie
                </button>
              </div>
            </div> */}
      </form>
    </Modal>
  );
};
