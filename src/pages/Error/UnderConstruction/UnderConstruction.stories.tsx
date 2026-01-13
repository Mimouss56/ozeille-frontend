import type { Meta, StoryObj } from "@storybook/react-vite";
import { cva } from "class-variance-authority";
import { BrowserRouter } from "react-router";

import UnderConstructionPage from "./UnderConstruction";

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

const meta: Meta<typeof UnderConstructionPage> = {
  title: "Pages/Error/UnderConstruction",
  component: UnderConstructionPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof UnderConstructionPage>;
export default meta;
type Story = StoryObj<typeof UnderConstructionPage>;

export const Default: Story = {
  render: () => (
    <div className={wrapperCva()}>
      <UnderConstructionPage />
    </div>
  ),
};

export const DarkBg: Story = {
  render: () => (
    <div className={wrapperCva({ bg: "dark" })}>
      <UnderConstructionPage />
    </div>
  ),
};
