import type { Budget } from "../../api/budgets";
import { Button } from "../Button/Button";
import { InputColor } from "../Form/InputColor/InputColor";
import { generateRandomColor } from "../Form/InputColor/useColor";
import { InputField } from "../Form/InputField/InputField";
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
        <div className="flex-2">
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

        <div className="flex-1 items-center align-middle">
          <InputColor value={formState.color} onChange={(color) => setFormState({ ...formState, color })} />
          <Button type="button" onClick={() => setFormState({ ...formState, color: generateRandomColor() })}>
            Couleur aléatoire
          </Button>
        </div>
      </form>
    </Modal>
  );
};
