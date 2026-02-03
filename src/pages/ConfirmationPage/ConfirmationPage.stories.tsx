import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import { ConfirmationPage } from "./ConfirmationPage.tsx";

const meta: Meta<typeof ConfirmationPage> = {
  title: "Pages/ConfirmationPage",
  component: ConfirmationPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof ConfirmationPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
