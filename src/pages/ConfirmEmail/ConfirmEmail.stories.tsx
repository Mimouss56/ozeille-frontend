import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import { ConfirmEmailPage } from "./ConfirmEmail";

const meta: Meta<typeof ConfirmEmailPage> = {
  title: "Pages/ConfirmEmailPage",
  component: ConfirmEmailPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof ConfirmEmailPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
