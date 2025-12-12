import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";

const meta = {
  title: "Layout/AppLayout",
  component: AppLayout,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, ratione.</div>,
  },
};
