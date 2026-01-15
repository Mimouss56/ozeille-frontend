import type { Meta, StoryObj } from "@storybook/react-vite";

import { TransactionDeleteModal } from "./TransactionDeleteModal.tsx";

const meta = {
  title: "UI/TransactionDeleteModal",
  component: TransactionDeleteModal,
  tags: ["autodocs"],
} satisfies Meta<typeof TransactionDeleteModal>;

export default meta;
type Story = StoryObj<typeof TransactionDeleteModal>;

export const Default: Story = {};
