import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pricing } from "./Pricing";

const meta = {
  title: "Pages/HomePage/Pricing",
  component: Pricing,
  tags: ["autodocs"],
} satisfies Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof Pricing>;

export const Default: Story = {};
