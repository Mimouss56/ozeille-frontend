import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Route, Routes } from "react-router";

import { ResetPasswordPage } from "./ResetPasswordPage";

const meta = {
  title: "Pages/ResetPasswordPage",
  component: ResetPasswordPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/reset-password?token=123456"]}>
        <Routes>
          <Route path="/reset-password" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ResetPasswordPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
