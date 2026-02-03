import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { MobileNav } from "./MobileNav";

const meta: Meta<typeof MobileNav> = {
  title: "Navigation/MobileNav",
  component: MobileNav,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ paddingBottom: "80px" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        component:
          "Barre de navigation fixée en bas de l'écran pour les appareils mobiles. Affiche les liens de navigation avec icônes et indicateur de page active.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MobileNav>;

export const Default: Story = {};
