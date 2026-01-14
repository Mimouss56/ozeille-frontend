import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordToggle } from "./PasswordToggle";
import { BrowserRouter } from "react-router";

const meta = {
  title: "UI/PasswordToggle",
  component: PasswordToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
} satisfies Meta<typeof PasswordToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isVisible: false,
    onToggle: () => {},
  },
};