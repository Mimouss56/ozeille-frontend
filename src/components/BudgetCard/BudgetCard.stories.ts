import type { Meta, StoryObj } from "@storybook/react-vite";

import { BudgetCard } from "./BudgetCard";
import { type CategoryItem } from "./BudgetCard";

const meta: Meta<typeof BudgetCard> = {
  title: "UI/BudgetCard",
  component: BudgetCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onEditTransaction: (id) => console.log("Add transaction:", id),
    onEditBudget: (id) => console.log("Edit budget:", id),
    onDelete: (id) => console.log("Delete budget:", id),
  },
};

export default meta;
type Story = StoryObj<typeof BudgetCard>;

const categoriesBase: CategoryItem[] = [
  { id: "c1", label: "Alimentation", currentAmount: 150, limitAmount: 400 },
  { id: "c2", label: "Logement", currentAmount: 800, limitAmount: 800 },
  { id: "c3", label: "Transports", currentAmount: 50, limitAmount: 100 },
];

export const Healthy: Story = {
  args: {
    id: "b1",
    label: "Budget Mensuel",
    color: "#3b82f6",
    currentAmount: 1000,
    limitAmount: 1500,
    categories: categoriesBase,
  },
};

export const AtLimit: Story = {
  args: {
    id: "b2",
    label: "Budget Vacances",
    color: "#22c55e",
    currentAmount: 2000,
    limitAmount: 2000,
    categories: [
      {
        id: "c1",
        label: "Hébergement avec un nom à rallonge pour tester l'affichage",
        currentAmount: 1000,
        limitAmount: 1000,
      },
      { id: "c2", label: "Activités", currentAmount: 500, limitAmount: 500 },
      { id: "c3", label: "Nourriture", currentAmount: 500, limitAmount: 500 },
    ],
  },
};

export const Exceeded: Story = {
  args: {
    id: "b3",
    label: "Budget Sorties",
    color: "#ef4444",
    currentAmount: 350,
    limitAmount: 200,
    categories: [
      { id: "c1", label: "Restaurants", currentAmount: 150, limitAmount: 100 },
      { id: "c2", label: "Cinéma", currentAmount: 50, limitAmount: 50 },
      { id: "c3", label: "Bars", currentAmount: 150, limitAmount: 50 },
    ],
  },
};

export const Empty: Story = {
  args: {
    id: "b4",
    label: "Nouveau Budget",
    color: "#a855f7",
    currentAmount: 0,
    limitAmount: 1000,
    categories: [],
  },
};
