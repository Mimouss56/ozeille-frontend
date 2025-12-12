import type { Meta, StoryObj } from "@storybook/react";
import { InputText } from "./InputText";

const meta = {
  title: "UI/InputText",
  component: InputText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    id: "",
    name: "",
    value: "",
    placeholder: "placeholder",
    helperText: "",
    readOnly: false,
    onChange: () => ({}),
  },
  argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: "radio",
        },
        style: {
            options: ['primary', 'secondary', 'neutral', 'accent', 'info', 'error'],
            control: "radio",
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof InputText>;
export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {};
