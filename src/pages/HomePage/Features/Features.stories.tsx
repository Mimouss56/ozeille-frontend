import type { Meta, StoryObj } from "@storybook/react-vite";

import { Features } from "./Features";

const meta = {
  title: "Pages/HomePage/Features",
  component: Features,
  tags: ["autodocs"],
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof Features>;

export const Default: Story = {
  args: {},
};

/*
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Features } from "../../../components/Features/Features";

const meta = {
  title: "Pages/HomePage/Features",
  component: Features,
  tags: ["autodocs"],
} satisfies Meta<typeof Features>;

export default meta;

type Story = StoryObj<typeof Features>;

export const Default: Story = {};
*/
