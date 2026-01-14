import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { MainMenu } from "./mainMenu";

const meta: Meta<typeof MainMenu> = {
  title: "Ui/Navigation/MainMenu",
  component: MainMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="bg-base-100 p-4">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {
  render: () => <MainMenu />,
};
