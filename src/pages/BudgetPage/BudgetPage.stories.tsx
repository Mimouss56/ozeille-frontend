import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import { BudgetPage } from "./BudgetPage";

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
