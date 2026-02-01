// button.stories.ts
import { PencilIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

// 1. Définir un objet de mapping pour les icônes disponibles
const icons = {
  Pencil: PencilIcon,
  Trash: TrashIcon,
  Plus: PlusIcon,
};

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    children: "Bouton",
  },
  argTypes: {
    style: {
      description: "Define the aspect of the button",
      control: "select", // 'select' est souvent plus propre que 'radio' s'il y a beaucoup d'options
      options: ["primary", "secondary", "outline", "ghost", "danger", "dangerOutline", "ghostOutline"],
    },
    size: {
      description: "Define the size of the button",
      control: "radio",
      options: ["sm", "md", "lg", "xl"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    join: { control: "boolean" },

    // 2. Configuration de l'argType pour l'icône
    icon: {
      description: "Icon to display in the button",
      // On donne les clés (les noms) comme options
      options: Object.keys(icons),
      // Storybook fera la correspondance Clé -> Composant
      mapping: icons,
      // Permet de choisir l'icône depuis l'interface !
      control: {
        type: "select",
        labels: {
          Pencil: "Crayon",
          Trash: "Poubelle",
          Plus: "Ajouter",
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Bouton primaire",
    style: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    // 3. On passe la CLÉ définie dans le mapping, pas le composant directement
    icon: PencilIcon,
    children: "Bouton avec icône",
  },
};

export const DisabledWithIcon: Story = {
  args: {
    icon: PencilIcon,
    children: "Désactivé",
    disabled: true,
  },
};

export const LoadingWithIcon: Story = {
  args: {
    icon: PencilIcon,
    children: "Chargement",
    loading: true,
  },
};
