import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import { TransactionPage } from "./TransactionPage.tsx";

const meta = {
  title: "Pages/TransactionPage",
  component: TransactionPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof TransactionPage>;

export default meta;
type Story = StoryObj<typeof TransactionPage>;

export const Default: Story = {};
