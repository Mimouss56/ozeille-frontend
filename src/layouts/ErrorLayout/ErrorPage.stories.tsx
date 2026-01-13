import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorLayout } from "./ErrorPage";

const meta: Meta<typeof ErrorLayout> = {
  title: "Pages/Error/ErrorPage",
  component: ErrorLayout,
  tags: ["autodocs"],
  args: {
    title: "Erreur 404",
    children: "La page que vous recherchez n'existe pas ou a été déplacée.",
    imgSrc: "/assets/empty-wallet.svg",
  },
};

export default meta;

type Story = StoryObj<typeof ErrorLayout>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    title: "Erreur personnalisée",
    children: (
      <>
        <span>Une erreur personnalisée est survenue.</span>
        <br />
        <span>Merci de contacter le support.</span>
      </>
    ),
    imgSrc: "/assets/custom-error.svg",
  },
};
