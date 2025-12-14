import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./Select";

const meta = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
    label: "Frequency",
    placeholder: "Select an option",
    options: [
      { label: "Hebdomadaire", value: "weekly" },
      { label: "Mensuel", value: "monthly" },
      { label: "Annuel", value: "yearly" },
    ],
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Taille de l'input",
    },
    style: {
      control: "select",
      options: ["primary", "secondary", "neutral", "accent", "info", "success", "warning", "error"],
      description: "Couleur/État de l'input",
    },
    disabled: { control: "boolean" },
    helperText: { control: "text" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    label: "Category",
    style: "error",
    helperText: "Please select a valid category",
    options: [{ label: "toto", value: "pwet" }],
  },
};
