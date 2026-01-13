import type { Meta, StoryObj } from "@storybook/react-vite";
import { cva } from "class-variance-authority";
import { BrowserRouter } from "react-router";

import { Navigation } from "./Navigation";

const wrapperCva = cva("p-4 min-h-screen transition-colors", {
  variants: {
    bg: {
      light: "bg-white text-gray-900",
      dark: "bg-gray-900 text-white",
    },
  },
  defaultVariants: {
    bg: "light",
  },
});
const meta = {
  title: "Ui/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  render: () => (
    <div className={wrapperCva()}>
      <Navigation />
    </div>
  ),
};

export const Dark: Story = {
  render: () => (
    <div className={wrapperCva({ bg: "dark" })}>
      <Navigation />
    </div>
  ),
};
