import type{ Meta, StoryObj } from "@storybook/react-vite";
import { cva } from "class-variance-authority";

import { PageNotFound } from "./NotFound";

const notFoundCva = cva("text-center p-8", {
  variants: {
    color: {
      default: "text-gray-700",
      error: "text-red-600",
    },
    size: {
      md: "text-2xl",
      lg: "text-4xl",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

const meta: Meta<typeof PageNotFound> = {
  title: "Pages/Error/NotFound",
  component: PageNotFound,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof PageNotFound>;

export const Default: Story = {
  args: {
    className: notFoundCva(),
  },
};

export const ErrorLarge: Story = {
  args: {
    className: notFoundCva({ color: "error", size: "lg" }),
  },
};
