import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import { MemoryRouter } from "react-router";

import { ConfirmationStatusEnum } from "../../@types/auth.d";
import { useAuthStore } from "../../store/auth.store";
import { ConfirmEmail } from "./ConfirmEmail";

// Utilitaire pour mocker le store Zustand
function useMockAuthStore(status: ConfirmationStatusEnum, error: string | null = null) {
  // On écrase temporairement l'implémentation du store pour le story
  useEffect(() => {
    useAuthStore.setState({
      confirmationStatus: status,
      confirmationError: error,
      confirmEmail: () => Promise.resolve(true),
    });
    // Nettoyage après le rendu du story
    return () => {
      useAuthStore.setState({
        confirmationStatus: ConfirmationStatusEnum.Idle,
        confirmationError: null,
      });
    };
  }, [status, error]);
}

const meta: Meta<typeof ConfirmEmail> = {
  title: "Pages/ConfirmEmail",
  component: ConfirmEmail,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof ConfirmEmail>;

export const Idle: Story = {
  render: () => {
    useMockAuthStore(ConfirmationStatusEnum.Idle);
    return (
      <MemoryRouter initialEntries={["/confirm-email"]}>
        <ConfirmEmail />
      </MemoryRouter>
    );
  },
};

export const Pending: Story = {
  render: () => {
    useMockAuthStore(ConfirmationStatusEnum.Pending);
    return (
      <MemoryRouter initialEntries={["/confirm-email?token=abc"]}>
        <ConfirmEmail />
      </MemoryRouter>
    );
  },
};

export const Success: Story = {
  render: () => {
    useMockAuthStore(ConfirmationStatusEnum.Success);
    return (
      <MemoryRouter initialEntries={["/confirm-email?token=abc"]}>
        <ConfirmEmail />
      </MemoryRouter>
    );
  },
};

export const Error: Story = {
  render: () => {
    useMockAuthStore(ConfirmationStatusEnum.Error, "La validation a échoué. Le lien est invalide ou expiré.");
    return (
      <MemoryRouter initialEntries={["/confirm-email?token=abc"]}>
        <ConfirmEmail />
      </MemoryRouter>
    );
  },
};
