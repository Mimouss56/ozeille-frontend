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
    },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof StatusMessage>;

export const Neutral: Story = {
  args: {
    style: "neutral",
    children: "Ceci est un message neutre.",
  },
};

export const Success: Story = {
  args: {
    style: "success",
    children: "Succès ! L'opération a réussi.",
  },
};

export const Error: Story = {
  args: {
    style: "error",
    children: "Erreur : une erreur est survenue.",
  },
};
