import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { PublicLayout } from "./PublicLayout";

const meta = {
  title: "Layouts/Public",
  component: PublicLayout,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PublicLayout>;

export default meta;
type Story = StoryObj<typeof PublicLayout>;

export const Default: Story = {
  render: () => <PublicLayout />,
};
