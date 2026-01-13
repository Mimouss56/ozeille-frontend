import type { Meta, StoryObj } from "@storybook/react-vite";
import { PencilSimple, Trash } from "phosphor-react";

import { ActionMenu } from "./ActionMenu";

const meta = {
  title: "UI/ActionMenu",
  component: ActionMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof ActionMenu>;

export const Default: Story = {
  args: {
    actions: [
      {
        label: "Modifier",
        icon: <PencilSimple size={16} />,
        onClick: () => console.log("Modifier"),
      },
      {
        label: "Supprimer",
        icon: <Trash size={16} />,
        variant: "danger",
        onClick: () => console.log("Supprimer"),
      },
    ],
  },
};

export const TextOnly: Story = {
  args: {
    actions: [
      { label: "Modifier", onClick: () => {} },
      { label: "Supprimer", onClick: () => {} },
    ],
  },
};
