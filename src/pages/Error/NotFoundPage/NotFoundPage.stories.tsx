import type { Meta, StoryObj } from "@storybook/react-vite";
import { cva } from "class-variance-authority";
import { BrowserRouter } from "react-router";

import { NotFoundPage } from "./NotFoundPage";

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

const meta: Meta<typeof NotFoundPage> = {
  title: "Pages/Error/NotFound",
  component: NotFoundPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof NotFoundPage>;
export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
  render: () => (
    <div className={wrapperCva()}>
      <NotFoundPage />
    </div>
  ),
};

export const DarkBg: Story = {
  render: () => (
    <div className={wrapperCva({ bg: "dark" })}>
      <NotFoundPage />
    </div>
  ),
};
