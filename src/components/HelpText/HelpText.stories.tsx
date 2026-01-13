import type { Meta, StoryObj } from "@storybook/react-vite";

import { HelpText } from "./HelpText.tsx";

const meta = {
  title: "UI/HelpText",
  component: HelpText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    style: {
      options: ["neutral", "error"],
      control: { type: "radio" },
    },
    size: {
      options: ["xs", "sm", "md"],
      control: { type: "radio" },
    },
  },
  render: function Render(args) {
    return <HelpText {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HelpText>;
  },
} satisfies Meta<typeof HelpText>;

export default meta;
type Story = StoryObj<typeof HelpText>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    style: "error",
  },
};
