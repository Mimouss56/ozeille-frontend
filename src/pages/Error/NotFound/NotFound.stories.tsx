import type { Meta, StoryObj } from "@storybook/react-vite";
import { cva } from "class-variance-authority";

import { PageNotFound } from "./NotFound";

const wrapperCva = cva("p-8", {
  variants: {
    bg: {
      default: "",
      dark: "bg-gray-900",
    },
  },
  defaultVariants: {
    bg: "default",
  },
});

const meta: Meta<typeof PageNotFound> = {
  title: "Pages/Error/NotFound",
  component: PageNotFound,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj<typeof PageNotFound>;

export const Default: Story = {
  render: () => <PageNotFound />,
};

export const DarkBg: Story = {
  render: () => (
    <div className={wrapperCva({ bg: "dark" })}>
      <PageNotFound />
    </div>
  ),
};
