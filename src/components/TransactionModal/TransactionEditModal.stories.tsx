import type { Meta, StoryObj } from "@storybook/react-vite";

import { TransactionEditModal } from "./TransactionEditModal.tsx";

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

export const Default: Story = {};
