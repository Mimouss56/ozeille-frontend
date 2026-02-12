import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleTheme } from "./ToggleTheme";

const meta = {
  title: "UI/ToggleTheme",
  component: ToggleTheme,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ToggleTheme>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Colors: Story = {
  render: () => <ToggleTheme />,
};
