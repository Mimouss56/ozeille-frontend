import type { Meta, StoryObj } from "@storybook/react-vite";
import { cva } from "class-variance-authority";
import { MemoryRouter } from "react-router";

import { PublicLayout } from "./PublicLayout";

const wrapperCva = cva("p-8 min-h-screen", {
  variants: {
    bg: {
      default: "bg-white text-gray-900",
      dark: "bg-gray-900 text-white",
    },
  },
  defaultVariants: {
    bg: "default",
  },
});

const meta = {
  title: "Layouts/Public",
  component: PublicLayout,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PublicLayout>;

export default meta;
type Story = StoryObj<typeof PublicLayout>;

export const Default: Story = {
  render: () => (
    <div className={wrapperCva()}>
      {/* mode clair par défaut */}
      <PublicLayout />
    </div>
  ),
};

export const Dark: Story = {
  render: () => (
    <div className={wrapperCva({ bg: "dark" })}>
      <PublicLayout />
    </div>
  ),
};
