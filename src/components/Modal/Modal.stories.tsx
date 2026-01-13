import type { Meta, StoryObj } from "@storybook/react-vite";

import Modal from "./Modal";

const meta = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      description: "Define the size of the modal",
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: "Lorem ipsum dolor",
    primaryLabel: "Confirmer",
    size: "md",
    children: "Lorem ipsum dolor sit amet.",
    onClose: () => {},
    onConfirm: () => {},
  },
};
