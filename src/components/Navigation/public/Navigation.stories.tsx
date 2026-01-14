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
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const NavigationStory: Story = {
  render: () => <Navigation />,
};
