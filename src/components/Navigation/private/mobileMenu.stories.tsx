import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { MobileMenu } from "./mobileMenu";

const meta: Meta<typeof MobileMenu> = {
  title: "Ui/Navigation/MobileMenu",
  component: MobileMenu,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "galaxys9",
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MobileMenu>;

export const Default: Story = {
  render: () => <MobileMenu />,
};
