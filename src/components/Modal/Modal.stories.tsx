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
    actionLabel: "Ouvrir",
    title: "Lorem ipsum dolor",
    confirmLabel: "Confirmer",
    size: "md",
    children: "Lorem ipsum dolor sit amet.",
  },
};

export const WithCustomConfirmAction: Story = {
  args: {
    title: "Modal with a custom confirm action",
    actionLabel: "Ouvrir",
    children: "Lorem ipsum dolor sit amet.",
  },
  render: function Render(args) {
    const confirmAction = () => {
      console.log("Confirming");
      return true;
    };

    return (
      <Modal {...args} onConfirm={confirmAction}>
        {args.children}
      </Modal>
    );
  },
};

export const WithCancelLabel: Story = {
  args: {
    title: "Lorem ipsum dolor",
    cancelLabel: "Fermer",
    actionLabel: "Ouvrir",
    children: "Lorem ipsum dolor sit amet.",
  },
};

export const WithCancelAction: Story = {
  args: {
    title: "Modal with a custom cancel action",
    actionLabel: "Ouvrir",
    children: "Lorem ipsum dolor sit amet.",
  },
  render: function Render(args) {
    const cancelAction = () => console.log("Cancelling");

    return (
      <Modal {...args} onCancel={cancelAction}>
        {args.children}
      </Modal>
    );
  },
};
