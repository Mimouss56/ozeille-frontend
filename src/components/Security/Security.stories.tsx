import type { Meta, StoryObj } from "@storybook/react-vite";

import { Security } from "./Security";

const meta = {
  title: "Pages/HomePage/Security",
  component: Security,
  tags: ["autodocs"],
} satisfies Meta<typeof Security>;

export default meta;

type Story = StoryObj<typeof Security>;

export const Default: Story = {};
