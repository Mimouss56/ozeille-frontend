import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

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
        icon: PencilSimpleIcon,
        style: "ghostOutline",
        onClick: () => console.log("Modifier"),
      },
      {
        label: "Supprimer",
        icon: TrashIcon,
        style: "dangerOutline",
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
