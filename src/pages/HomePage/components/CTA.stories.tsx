import type { Meta, StoryObj } from "@storybook/react-vite";

import { CTA } from "./CTA";

const meta = {
  title: "Pages/HomePage/CTA",
  component: CTA,
  tags: ["autodocs"],
} satisfies Meta<typeof CTA>;

export default meta;

type Story = StoryObj<typeof CTA>;

export const Default: Story = {};
