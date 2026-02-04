import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Transaction } from "../../api/transactions.ts";
import { TransactionModal } from "./TransactionModal.tsx";

const fakeTransaction: Transaction[] = [
  {
    id: "",
    label: "",
    amount: 0,
    dueAt: new Date().toISOString(),
    pointedAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    frequencyId: "",
    category: {
      id: "",
      label: "",
      budgetId: "",
      color: null,
      userId: null,
      limitAmount: 0,
      type: "INCOME",
    },
    categoryId: null,
  },
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
      type: "INCOME",
    },
    categoryId: null,
  },
];
const meta = {
  title: "UI/TransactionModal",
  component: TransactionModal,
  tags: ["autodocs"],
} satisfies Meta<typeof TransactionModal>;

export default meta;
type Story = StoryObj<typeof TransactionModal>;

export const NewForm: Story = {
  args: {
    transaction: fakeTransaction[0],
  },
};
export const EditForm: Story = {
  args: {
    transaction: fakeTransaction[1],
  },
};
