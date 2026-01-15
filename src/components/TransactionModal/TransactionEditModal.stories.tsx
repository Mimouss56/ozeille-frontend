import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Transaction } from "../../api/transactions.ts";
import { TransactionEditModal } from "./TransactionEditModal.tsx";

const fakeTransaction: Transaction = {
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
};

const meta = {
  title: "UI/TransactionEditModal",
  component: TransactionEditModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TransactionEditModal>;

export default meta;
type Story = StoryObj<typeof TransactionEditModal>;

export const Default: Story = {
  args: {
    transaction: fakeTransaction,
  },
};
