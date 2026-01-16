import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import { TwoFAPage } from "./DoubleFAPage";

const meta = {
  title: "Pages/TwoFAPage",
  component: TwoFAPage,
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
} satisfies Meta<typeof TwoFAPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
