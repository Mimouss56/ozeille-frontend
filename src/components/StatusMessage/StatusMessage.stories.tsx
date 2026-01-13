import type { Meta, StoryObj } from "@storybook/react-vite";

import { StatusCard } from "./StatusMessage";

const meta: Meta<typeof StatusCard> = {
  title: "Ui/StatusCard",
  component: StatusCard,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["neutral", "success", "error"],
    },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof StatusCard>;

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "Ceci est un message neutre.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Succès ! L'opération a réussi.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Erreur : une erreur est survenue.",
  },
};
