import type { Meta, StoryObj } from "@storybook/react-vite";

import { StatusMessage } from "./StatusMessage";

const meta: Meta<typeof StatusMessage> = {
  title: "Ui/StatusMessage",
  component: StatusMessage,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["neutral", "success", "error"],
      description: "Style du message indiquant le type de statut.",
    },
    layout: {
      control: { type: "radio" },
      options: ["box", "text"],
      description: "Box: pour les messages globaux. Text: pour les helpers d'input.",
    },
    children: { control: "text" },
  },
  args: {
    layout: "box",
    status: "neutral",
  },
};

export default meta;

type Story = StoryObj<typeof StatusMessage>;

export const NeutralBox: Story = {
  args: {
    status: "neutral",
    children: "Text",
  },
};

export const SuccessBox: Story = {
  args: {
    status: "success",
    children: "Succès !",
  },
};

export const ErrorBox: Story = {
  args: {
    status: "error",
    children: "Erreur !",
  },
};

export const InputHelperText: Story = {
  args: {
    layout: "text", 
    status: "error",
    children: "Ce champ est requis.",
  },
};