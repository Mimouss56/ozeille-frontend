import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "./ProgressBar";

const meta = {
    title: 'UI/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
    parameters: { 
      layout: 'padded',
    },
    args: {
      value: 50,
      max: 100,
    },
    argTypes: {
      color: {
        control: "radio",
        options: ['success', 'warning', 'error'],
        description: "Couleur de la barre de progression",
      },
      value: { 
        control: { type: 'number', min: 0 },  
        description: "Valeur actuelle",
      },
      max: { 
        control: { type: 'number', min: 1 },  
        description: "Valeur maximale",
      },
    }
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

export const BudgetHealthy: Story = {
  args: {
    value: 30,
    max: 100,
    color: "success",
  }
};

export const BudgetAchieved: Story = {
  args: {
    value: 100,
    max: 100,
    color: "warning",
  }
};

export const BudgetExceeded: Story = {
  args: {
    value: 110,
    max: 100,
    color: "error",
  }
};