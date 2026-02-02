import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Budget } from "../../api/budgets";
import { BudgetCard } from "./BudgetCard";

const meta: Meta<typeof BudgetCard> = {
  title: "UI/BudgetCard",
  component: BudgetCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof BudgetCard>;

// Helper pour créer des transactions avec un montant
const createTransaction = (id: string, amount: number, label: string) => ({
  id,
  amount,
  label,
  dueAt: "2026-02-01",
  pointedAt: null,
  createdAt: "2026-01-01",
  updatedAt: "2026-01-01",
  frequencyId: "f1",
  category: {} as never, // Évite la référence circulaire dans la story
});

// Helper pour créer une catégorie avec transactions
const createCategory = (
  id: string,
  label: string,
  limitAmount: number,
  transactionAmounts: number[],
  budgetId = "b1",
) => ({
  id,
  budgetId,
  label,
  color: null,
  userId: null,
  limitAmount,
  transactions: transactionAmounts.map((amount, i) => createTransaction(`${id}-t${i}`, amount, `Transaction ${i + 1}`)),
});

const budgetHealthy: Budget = {
  id: "b1",
  label: "Budget Mensuel",
  color: "#3b82f6",
  categories: [
    createCategory("c1", "Alimentation", 400, [100, 50]),
    createCategory("c2", "Logement", 800, [800]),
    createCategory("c3", "Transports", 100, [30, 20]),
  ],
};

export const Healthy: Story = {
  args: {
    budget: budgetHealthy,
  },
};

const budgetAtLimit: Budget = {
  id: "b2",
  label: "Budget Vacances",
  color: "#22c55e",
  categories: [
    createCategory("c1", "Hébergement avec un nom à rallonge pour tester l'affichage", 1000, [600, 400], "b2"),
    createCategory("c2", "Activités", 500, [300, 200], "b2"),
    createCategory("c3", "Nourriture", 500, [250, 250], "b2"),
  ],
};

export const AtLimit: Story = {
  args: {
    budget: budgetAtLimit,
  },
};

const budgetExceeded: Budget = {
  id: "b3",
  label: "Budget Sorties",
  color: "#ef4444",
  categories: [
    createCategory("c1", "Restaurants", 100, [80, 70], "b3"),
    createCategory("c2", "Cinéma", 50, [50], "b3"),
    createCategory("c3", "Bars", 50, [100, 50], "b3"),
  ],
};

export const Exceeded: Story = {
  args: {
    budget: budgetExceeded,
  },
};

const budgetEmpty: Budget = {
  id: "b4",
  label: "Nouveau Budget",
  color: "#a855f7",
  categories: [],
};

export const Empty: Story = {
  args: {
    budget: budgetEmpty,
  },
};
