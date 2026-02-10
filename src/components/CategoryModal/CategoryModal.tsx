import { TrendDownIcon, TrendUpIcon } from "@phosphor-icons/react";

import type { Category } from "../../api/categories";
import { Button } from "../Button/Button";
// Import direct du store
import { InputField } from "../InputField/InputField";
import Modal from "../Modal/Modal";
import { Select } from "../Select/Select";
import { useCategoryModal } from "./useCategoryModal";

interface CategoryModalProps {
  category?: Category;
  onClose: () => void;
}

export const CategoryModal = ({ category, onClose }: CategoryModalProps) => {
  const { formState, errors, handleChange, handleSubmit, budgetOptions, loading } = useCategoryModal(category);

  return (
    <Modal
      loading={loading}
      isOpen={true}
      onClose={onClose}
      onCancel={onClose}
      title={category?.id ? "Modifier la catégorie" : "Nouvelle catégorie"}
      cancelLabel="Annuler"
      confirmLabel={category ? "Enregistrer" : "Créer"}
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
          helperText={errors.budgetId}
          style={errors.budgetId ? "error" : "neutral"}
        />

        <div className="flex gap-4">
          <div className="rounded-circle h-10 w-10 overflow-hidden">
            <input
              type="color"
              className="h-full w-full cursor-pointer rounded-full border-none"
              value={formState.color}
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
