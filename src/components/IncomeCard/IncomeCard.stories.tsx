import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Category } from "../../api/categories";
import { IncomeCard } from "./IncomeCard";

const meta: Meta<typeof IncomeCard> = {
  title: "Ui/IncomeCard",
  component: IncomeCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IncomeCard>;

const MOCK_CATEGORIES: Category[] = [
  {
    id: "1",
    label: "Salaire",
    type: "INCOME",
    color: "#10B981", // Emerald 500
    transactions: [
      {
        amount: 2400,
        id: "",
        label: "",
        dueAt: "",
        pointedAt: null,
        createdAt: "",
        updatedAt: "",
        frequencyId: "",
        category: {
          id: "",
          label: "",
          type: "INCOME",
          color: "",
          transactions: [],
          budgetId: "",
          userId: null,
          limitAmount: 0,
        },
        categoryId: null,
      },
      {
        amount: 150,
        id: "",
        label: "",
        dueAt: "",
        pointedAt: null,
        createdAt: "",
        updatedAt: "",
        frequencyId: "",
        category: {
          id: "",
          label: "",
          type: "INCOME",
          color: "",
          transactions: [],
          budgetId: "",
          userId: null,
          limitAmount: 0,
        },
        categoryId: null,
      },
    ],
    budgetId: "",
    userId: null,
    limitAmount: 0,
  },
  {
    id: "2",
    label: "Freelance",
    type: "INCOME",
    color: "#3B82F6", // Blue 500
    transactions: [
      {
        amount: 450,
        id: "",
        label: "",
        dueAt: "",
        pointedAt: null,
        createdAt: "",
        updatedAt: "",
        frequencyId: "",
        category: {
          id: "",
          label: "",
          type: "INCOME",
          color: "",
          transactions: [],
          budgetId: "",
          userId: null,
          limitAmount: 0,
        },
        categoryId: null,
      },
    ],
    budgetId: "",
    userId: null,
    limitAmount: 0,
  },
  {
    id: "3",
    label: "Vinted",
    type: "INCOME",
    color: "#EC4899", // Pink 500
    transactions: [
      {
        amount: 35.5,
        id: "",
        label: "",
        dueAt: "",
        pointedAt: null,
        createdAt: "",
        updatedAt: "",
        frequencyId: "",
        category: {
          id: "",
          label: "",
          type: "INCOME",
          color: "",
          transactions: [],
          budgetId: "",
          userId: null,
          limitAmount: 0,
        },
        categoryId: null,
      },
    ],
    budgetId: "",
    userId: null,
    limitAmount: 0,
  },
];

export const Default: Story = {
  args: {
    categories: MOCK_CATEGORIES,
  },
};

export const Empty: Story = {
  args: {
    categories: [],
  },
};
