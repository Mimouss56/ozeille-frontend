import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: "centered" },
  argTypes: {
    style: {
      description: 'Define the color of the checkbox',
      control: "radio",
      options: ["primary", "secondary", "accent", "neutral"],
    },
    size: {
      description: 'Define the size of the checkbox',
      control: "radio",
      options: ["xs","sm", "md", "lg", "xl"],
    },
     shape: {
      description: 'Define the border radius of the checkbox',
      control: 'radio',
      options: ['square', 'rounded', 'pill'],
    },
    disabled: {
      control: { type: 'boolean'}
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {};
