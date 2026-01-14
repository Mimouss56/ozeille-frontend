import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputField } from "./InputField.tsx";

const meta = {
  title: "UI/InputText",
  component: InputField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    label: "Storybook input label",
    placeholder: "Label placeholder",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: "radio",
    },
    style: {
      options: ["primary", "secondary", "neutral", "accent", "info", "error", "success"],
      control: "radio",
    },
    disabled: {
      control: "boolean",
    },
    type: {
      options: ["text", "date", "password", "number", "email"],
      control: "radio",
    },
  },
} satisfies Meta<typeof InputField>;
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    id: "default-stories",
    name: "default-stories",
    helperText: "Description text",
  },
};

export const WithoutHelp: Story = {
  args: {
    id: "no-help-stories",
    name: "no-help-stories",
  },
};

export const WithError: Story = {
  args: {
    id: "error-stories",
    name: "error-stories",
    label: "Error label",
    helperText: "This is an error message",
    style: "error",
  },
};

export const DateInput: Story = {
  args: {
    id: "date-stories",
    name: "date-stories",
    label: "Date input label",
    type: "date",
  },
};

export const PasswordInput: Story = {
  args: {
    id: "password-stories",
    name: "password-stories",
    label: "Password input label",
    type: "password",
  },
};

export const NumberInput: Story = {
  args: {
    id: "number-stories",
    name: "number-stories",
    label: "Number input label",
    type: "number",
  },
};
