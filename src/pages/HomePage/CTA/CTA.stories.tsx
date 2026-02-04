import type { Meta, StoryObj } from "@storybook/react-vite";

import { Cta } from "./CTA";

const meta = {
  title: "Pages/HomePage/CTA",
  component: Cta,
} satisfies Meta<typeof Cta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
