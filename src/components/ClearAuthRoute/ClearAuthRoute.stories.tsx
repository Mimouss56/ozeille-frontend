import type { Meta, StoryObj } from "@storybook/react-vite";

import { ClearAuthRoute } from "./ClearAuthRoute";

const meta: Meta<typeof ClearAuthRoute> = {
  title: "Components/ClearAuthRoute",
  component: ClearAuthRoute,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant wrapper qui efface les tokens de session (logout) lors de l'accès à certaines routes spécifiques. Utile pour les pages de login, register, ou reset password.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ClearAuthRoute>;

export const Default: Story = {
  render: () => (
    <ClearAuthRoute>
      <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
        <p>Contenu enfant protégé par ClearAuthRoute</p>
        <p style={{ fontSize: "0.875rem", color: "#666" }}>
          La session utilisateur a été effacée au montage de ce composant.
        </p>
      </div>
    </ClearAuthRoute>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <ClearAuthRoute>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Page de connexion</h2>
        <p>L&apos;utilisateur a été déconnecté automatiquement.</p>
      </div>
    </ClearAuthRoute>
  ),
};
