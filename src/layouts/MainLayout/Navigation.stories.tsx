import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import { Navigation } from "./Navigation";

const meta = {
  title: "Layouts/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
