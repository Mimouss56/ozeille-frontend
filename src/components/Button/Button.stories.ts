import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  // Organise le dossier dans la barre de navigation Storybook
  title: "UI/Button",
  // Le composant a documenter
  component: Button,
  // Active la documentation automatique
  tags: ['autodocs'],
  parameters: { layout: "centered" },
  // Corresponds au props du composant
  args: {
    children: "Bouton",
  },
  argTypes: {
    style: {
      description: 'Define the aspect of the button',
      control: "radio",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      description: 'Define the size of the button',
      control: "radio",
      options: ["sm", "md", "lg", "xl"],
    },
    disabled: {
      control: { type: 'boolean'}
    },
    loading: {
      control: { type: 'boolean'}
    },
    join: {
      control: { type: 'boolean'}
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Avoir au moins une story de defini.
export const Primary: Story = {};
//
// export const Secondary: Story = { args: { style: "secondary" } };
//
// export const Large: Story = { args: { size: "lg" } };
//
// export const Loading: Story = { args: { loading: true } };
