import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Ui/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="min-h-screen bg-gray-100">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  render: () => <Navigation />,
};
