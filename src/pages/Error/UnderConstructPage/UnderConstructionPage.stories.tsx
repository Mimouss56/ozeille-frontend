import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { UnderConstructionPage } from "./UnderConstructionPage";

const meta: Meta<typeof UnderConstructionPage> = {
  title: "Pages/HomePage/Error/UnderConstruction",
  component: UnderConstructionPage,
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

type Story = StoryObj<typeof UnderConstructionPage>;

export const UnderConstructionStory: Story = {
  render: () => <UnderConstructionPage />,
  parameters: {
    reactRouter: {
      routePath: "/under-construction",
    },
  },
};
