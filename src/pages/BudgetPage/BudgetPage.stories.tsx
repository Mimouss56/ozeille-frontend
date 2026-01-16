import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import { BrowserRouter } from "react-router";

import { type Budget, type MetaResponse } from "../../api/Budgets";
import { useStoreBudgets } from "../../store/BudgetsStore";
import { BudgetPage } from "./BudgetPage";

const fakeBudgets: Budget[] = [
  {
    id: "1",
    label: "Achat supermarché",
    amount: 54.99,
    dueAt: "2026-01-10T00:00:00.000Z",
    pointedAt: null,
    createdAt: "2026-01-10T10:00:00.000Z",
    updatedAt: "2026-01-10T10:00:00.000Z",
    frequencyId: "1",
    category: {
      id: "1",
      label: "Alimentation",
      budgetId: "",
      color: null,
      userId: null,
      limitAmount: 0,
    },
  },
  {
    id: "2",
    label: "Abonnement Netflix",
    amount: 13.99,
    dueAt: "2026-01-01T00:00:00.000Z",
    pointedAt: "2026-01-02T00:00:00.000Z",
    createdAt: "2026-01-01T10:00:00.000Z",
    updatedAt: "2026-01-01T10:00:00.000Z",
    frequencyId: "2",
    category: {
      id: "2",
      label: "Divertissement",
      budgetId: "",
      color: null,
      userId: null,
      limitAmount: 0,
    },
  },
];

const fakeMeta: MetaResponse = {
  totalPages: 1,
  total: fakeBudgets.length,
  page: 1,
  limit: 10,
};

const meta = {
  title: "Pages/BudgetPage",
  component: BudgetPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof BudgetPage>;

export default meta;
type Story = StoryObj<typeof BudgetPage>;

export const WithData: Story = {
  decorators: [(Story) => <Story />],
};
