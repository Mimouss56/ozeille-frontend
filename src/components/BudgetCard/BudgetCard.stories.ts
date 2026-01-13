import type { Meta, StoryObj } from "@storybook/react-vite";

import { BudgetCard } from "./BudgetCard";

const meta = {
  title: "UI/BudgetCard",
  component: BudgetCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  args: {
    onEdit: (id) => console.log("Edit budget:", id),
  },
} satisfies Meta<typeof BudgetCard>;

export default meta;
type Story = StoryObj<typeof BudgetCard>;

const categoriesBase = [
  { id: "c1", label: "Category 1", currentAmount: 10, limitAmount: 20 },
  { id: "c2", label: "Category 2", currentAmount: 10, limitAmount: 20 },
  { id: "c3", label: "Category 3", currentAmount: 10, limitAmount: 20 },
];

export const Healthy: Story = {
  args: {
    id: "b1",
    label: "Budgets 1 ",
    color: "#3b82f6",
    currentAmount: 30,
    limitAmount: 60,
    categories: categoriesBase,
  },
};

export const AtLimit: Story = {
  args: {
    id: "b2",
    label: "Budgets 2",
    color: "#22c55e",
    currentAmount: 60,
    limitAmount: 60,
    categories: [
      { id: "c1", label: "Category avec un nom bien trop long", currentAmount: 20, limitAmount: 20 },
      { id: "c2", label: "Category B", currentAmount: 20, limitAmount: 20 },
      { id: "c3", label: "Category C", currentAmount: 20, limitAmount: 20 },
    ],
  },
};

export const Exceeded: Story = {
  args: {
    id: "b3",
    label: "Budgets 3",
    color: "#000000",
    currentAmount: 75,
    limitAmount: 60,
    categories: [
      { id: "c1", label: "Category X", currentAmount: 20, limitAmount: 20 },
      { id: "c2", label: "Category Y", currentAmount: 30, limitAmount: 20 },
      { id: "c3", label: "Category Z", currentAmount: 25, limitAmount: 20 },
    ],
  },
};

export const Empty: Story = {
  args: {
    id: "b4",
    label: "Budget 3",
    color: "#a855f7",
    currentAmount: 0,
    limitAmount: 100,
    categories: [],
  },
};
