import type { Meta, StoryObj } from "@storybook/react-vite";
import { cva } from "class-variance-authority";

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
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj<typeof UnderConstructionPage>;

export const Default: Story = {
  render: () => <UnderConstructionPage />,
};

export const DarkBg: Story = {
  render: () => (
    <div className={wrapperCva({ bg: "dark" })}>
      <UnderConstructionPage />
    </div>
  ),
};
