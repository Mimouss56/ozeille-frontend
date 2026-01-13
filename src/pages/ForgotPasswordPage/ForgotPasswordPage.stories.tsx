import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { ForgotPasswordPage } from "./ForgotPasswordPage";

const meta = {
  title: "Pages/ForgotPasswordPage",
  component: ForgotPasswordPage,
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
} satisfies Meta<typeof ForgotPasswordPage>;

export default meta;
type Story = StoryObj<typeof ForgotPasswordPage>;

export const Default: Story = {};
