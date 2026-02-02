import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import type { Budget } from "../../api/budgets";
import type { MetaResponse } from "../../api/transactions";
import { BudgetPage } from "./BudgetPage";

const fakeBudgets: Budget[] = [
  {
    id: "1",
    label: "Achat supermarché",
    color: "",
    categories: [],
  },
  {
    id: "2",
    label: "Abonnement Netflix",
    color: "",
    categories: [],
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
