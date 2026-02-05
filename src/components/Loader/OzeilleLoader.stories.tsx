import type { Meta, StoryObj } from "@storybook/react-vite";

import { OzeilleLoader } from "./OzeilleLoader";

const meta = {
  title: "UI/OzeilleLoader",
  component: OzeilleLoader,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    text: {
      description: "Texte principal affiché sous le loader",
      control: "text",
    },
    subtext: {
      description: "Texte secondaire affiché sous le texte principal",
      control: "text",
    },
    fullscreen: {
      description: "Active le mode plein écran avec position fixe",
      control: "boolean",
    },
  },
} satisfies Meta<typeof OzeilleLoader>;

export default meta;
type Story = StoryObj<typeof OzeilleLoader>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: "Chargement en cours...",
  },
};

export const WithTextAndSubtext: Story = {
  args: {
    text: "Chargement en cours...",
    subtext: "Veuillez patienter quelques instants",
  },
};

export const Fullscreen: Story = {
  args: {
    fullscreen: true,
    text: "Chargement de l'application",
    subtext: "Préparation de votre espace",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const PageLoader: Story = {
  args: {
    fullscreen: true,
    text: "Chargement de la page...",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const DataLoading: Story = {
  args: {
    text: "Récupération des données",
    subtext: "Cela peut prendre quelques secondes",
  },
};
