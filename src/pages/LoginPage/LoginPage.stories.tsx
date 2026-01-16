import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoginPage } from "./LoginPage";
import { MemoryRouter } from "react-router";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof LoginPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
