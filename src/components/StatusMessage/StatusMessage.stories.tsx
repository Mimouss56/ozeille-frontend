import type { Meta, StoryObj } from "@storybook/react-vite";

import { StatusMessage } from "./StatusMessage";

const meta: Meta<typeof StatusMessage> = {
  title: "Ui/StatusMessage",
  component: StatusMessage,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: { type: "select" },
      options: ["neutral", "success", "error"],
      description: "Style du message indiquant le type de statut.",
    },
    layout: {
      control: { type: "radio" },
      options: ["box", "text"],
      description: "Box: pour les messages globaux. Text: pour les helpers d'input.",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md"],
    },
    children: { control: "text" },
  },
  args: {
    layout: "box",
    size: "sm",
    style: "neutral",
  },
};

export default meta;

type Story = StoryObj<typeof StatusMessage>;

export const NeutralBox: Story = {
  args: {
    style: "neutral",
    children: "Text",
  },
};

export const SuccessBox: Story = {
  args: {
    style: "success",
    children: "Succès !",
  },
};

export const ErrorBox: Story = {
  args: {
    style: "error",
    children: "Erreur !",
  },
};

export const InputHelperText: Story = {
  args: {
    layout: "text", 
    style: "error",
    size: "xs", 
    children: "Ce champ est requis.",
  },
};