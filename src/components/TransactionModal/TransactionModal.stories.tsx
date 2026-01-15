import type { Meta, StoryObj } from "@storybook/react-vite";

import { TransactionModal } from "./TransactionModal.tsx";

const meta = {
  title: "UI/TransactionModal",
  component: TransactionModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TransactionModal>;

export default meta;
type Story = StoryObj<typeof TransactionModal>;

export const Default: Story = {};
