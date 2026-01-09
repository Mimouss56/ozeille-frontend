import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import { HomePage } from "./HomePage";

const meta = {
  title: "Pages/HomePage",
  component: HomePage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
