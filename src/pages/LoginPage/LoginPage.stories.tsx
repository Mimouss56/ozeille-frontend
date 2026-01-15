import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";
import { LoginPage } from "./LoginPage";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
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
} satisfies Meta<typeof LoginPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};