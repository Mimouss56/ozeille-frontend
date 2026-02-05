import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Budget } from "../../api/budgets";
import { BudgetModal } from "./BudgetModal";

const meta = {
  title: "UI/BudgetModal",
  component: BudgetModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    budget: {
      control: "object",
      description: "Budget à éditer (undefined pour création)",
    },
  },
} satisfies Meta<typeof BudgetModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleBudget: Budget = {
  id: "budget-1",
  label: "Courses alimentaires",
  color: "#4CAF50",
  categories: [],
};

/**
 * Mode création : affiche le formulaire vide pour créer un nouveau budget
 */
export const Default: Story = {
  args: {
    budget: undefined,
    onClose: () => {},
  },
};

/**
 * Mode édition : affiche le formulaire pré-rempli avec les données du budget
 */
export const EditMode: Story = {
  args: {
    budget: exampleBudget,
    onClose: () => {},
  },
};

/**
 * Mode édition avec une couleur différente
 */
export const EditModeWithDifferentColor: Story = {
  args: {
    budget: {
      ...exampleBudget,
      id: "budget-2",
      label: "Loisirs",
      color: "#E91E63",
    },
    onClose: () => {},
  },
};
