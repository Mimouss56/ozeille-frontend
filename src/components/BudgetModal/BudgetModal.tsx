import type { Budget } from "../../api/budgets";
import { InputField } from "../InputField/InputField";
import Modal from "../Modal/Modal";
import { useBudgetModal } from "./useBudgetModal";

interface BudgetModalProps {
  budget?: Budget;
  onClose: () => void;
}

export const BudgetModal = ({ budget, onClose }: BudgetModalProps) => {
  const { handleSubmit, errors, formState, handleChange, setFormState } = useBudgetModal(budget);
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      onCancel={onClose}
      title={budget?.id ? "Éditer un budget" : "Créer un nouveau budget"}
      cancelLabel="Annuler"
      confirmLabel={budget?.id ? "Modifier" : "Créer"}
      style={budget?.id ? "ghost" : "primary"}
      onConfirm={handleSubmit}>
      <form className="flex justify-between gap-2 align-baseline md:gap-4">
        <div className="flex-1">
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

        <div className="rounded-circle h-10 w-10 overflow-hidden">
          <input
            type="color"
            className="h-full w-full cursor-pointer rounded-full border-none"
            value={formState.color}
            onChange={(e) => setFormState({ ...formState, color: e.target.value })}
          />
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
