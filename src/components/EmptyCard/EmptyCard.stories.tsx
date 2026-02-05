import { CheckCircleIcon, PackageIcon, WalletIcon, WarningIcon, XCircleIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { EmptyCard, EmptyCardStatus } from "./EmptyCard";

const meta: Meta<typeof EmptyCard> = {
  title: "UI/EmptyCard",
  component: EmptyCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Carte vide utilisée pour indiquer l'absence de données ou guider l'utilisateur. Supporte plusieurs statuts visuels (neutral, success, warning, error).",
      },
    },
  },
  argTypes: {
    icon: {
      description: "Icône Phosphor à afficher",
      control: false,
    },
    label: {
      description: "Texte principal de la carte",
      control: "text",
    },
    subtitle: {
      description: "Texte secondaire optionnel",
      control: "text",
    },
    status: {
      description: "Statut visuel de la carte",
      control: "select",
      options: Object.values(EmptyCardStatus),
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyCard>;

export const Default: Story = {
  args: {
    icon: WalletIcon,
    label: "Aucun budget",
    subtitle: "Créez votre premier budget pour commencer",
  },
};

export const Neutral: Story = {
  args: {
    icon: PackageIcon,
    label: "Aucune donnée",
    subtitle: "Les données apparaîtront ici",
    status: EmptyCardStatus.Neutral,
  },
};

export const Success: Story = {
  args: {
    icon: CheckCircleIcon,
    label: "Tout est en ordre",
    subtitle: "Aucune action requise",
    status: EmptyCardStatus.Success,
  },
};

export const Warning: Story = {
  args: {
    icon: WarningIcon,
    label: "Attention requise",
    subtitle: "Vérifiez vos paramètres",
    status: EmptyCardStatus.Warning,
  },
};

export const Error: Story = {
  args: {
    icon: XCircleIcon,
    label: "Une erreur est survenue",
    subtitle: "Veuillez réessayer plus tard",
    status: EmptyCardStatus.Error,
  },
};

export const WithoutSubtitle: Story = {
  args: {
    icon: WalletIcon,
    label: "Aucune transaction",
    status: EmptyCardStatus.Neutral,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <EmptyCard icon={PackageIcon} label="Neutral" subtitle="Statut par défaut" status={EmptyCardStatus.Neutral} />
      <EmptyCard icon={CheckCircleIcon} label="Success" subtitle="Opération réussie" status={EmptyCardStatus.Success} />
      <EmptyCard icon={WarningIcon} label="Warning" subtitle="Attention requise" status={EmptyCardStatus.Warning} />
      <EmptyCard icon={XCircleIcon} label="Error" subtitle="Erreur détectée" status={EmptyCardStatus.Error} />
    </div>
  ),
};

export const LightMode: Story = {
  decorators: [
    (Story) => (
      <div data-theme="light" className="bg-base-100 p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    icon: WalletIcon,
    label: "Mode clair",
    subtitle: "Aperçu en thème light",
  },
};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-base-100 p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    icon: WalletIcon,
    label: "Mode sombre",
    subtitle: "Aperçu en thème dark",
  },
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="flex gap-4">
      <div data-theme="light" className="bg-base-100 rounded-lg p-4">
        <p className="text-base-content mb-2 text-center text-sm font-semibold">Light Mode</p>
        <EmptyCard icon={WalletIcon} label="Aucun budget" subtitle="Créez votre premier budget" />
      </div>
      <div data-theme="dark" className="bg-base-100 rounded-lg p-4">
        <p className="text-base-content mb-2 text-center text-sm font-semibold">Dark Mode</p>
        <EmptyCard icon={WalletIcon} label="Aucun budget" subtitle="Créez votre premier budget" />
      </div>
    </div>
  ),
};
