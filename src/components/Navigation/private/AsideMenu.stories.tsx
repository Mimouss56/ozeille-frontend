import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { AsideMenu } from "./AsideMenu";

const meta: Meta<typeof AsideMenu> = {
  title: "Navigation/AsideMenu",
  component: AsideMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Menu latéral de navigation pour les écrans desktop. Affiche le logo, les liens de navigation principale, les initiales de l'utilisateur et un bouton de déconnexion.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AsideMenu>;

export const Default: Story = {};
