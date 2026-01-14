import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";

import { NotFoundPage } from "./NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
  title: "Pages/HomePage/Error/NotFound",
  component: NotFoundPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof NotFoundPage>;
export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const NotFoundStory: Story = {
  render: () => <NotFoundPage />,
  parameters: {
    reactRouter: {
      routePath: "/not-found",
    },
  },
};
