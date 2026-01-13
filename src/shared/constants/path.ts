import { HouseIcon, PiggyBankIcon, SignInIcon, UserIcon } from "@phosphor-icons/react";
import React from "react";

import { AppLayout } from "../../layouts/SidePanel/AppLayout";
import { ConfirmEmailPage } from "../../pages/ConfirmEmail/ConfirmEmail";
import { PageNotFound } from "../../pages/Error/NotFound/NotFound";
import UnderConstructionPage from "../../pages/Error/UnderConstruction/UnderConstruction";
import { ForgotPasswordPage } from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import { HomePage } from "../../pages/HomePage/HomePage";

/**
 * Exemple de structure pour les chemins de l'application
 * Chaque chemin peut contenir :
 * - PATH : le chemin URL
 * - COMPONENT : le composant React à rendre pour ce chemin
 * - ICON : une icône associée (optionnel)
 * - HIDE_IN_MENU : un booléen pour indiquer si le chemin doit être caché dans le menu de navigation
 *   PUBLIC: {
    HOME: {
      PATH: "/",
      COMPONENT: HomePage,
      ICON: undefined,
      HIDE_IN_MENU: false,
    },
 */

export const PATHS = {
  PUBLIC: {
    HOME: {
      PATH: "/",
      COMPONENT: HomePage,
      ICON: undefined,
      HIDE_IN_MENU: false,
      LABEL: "O'Zeille",
    },
    LOGIN: {
      PATH: "/login",
      COMPONENT: () => React.createElement("h1", null, "Se connecter"),
      ICON: SignInIcon,
      HIDE_IN_MENU: true,
      LABEL: "Se connecter",
    },
    REGISTER: {
      PATH: "/register",
      COMPONENT: () => React.createElement("h1", null, "S'inscrire"),
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "S'inscrire",
    },
    FORGOT_PASSWORD: {
      PATH: "/forgot-password",
      COMPONENT: ForgotPasswordPage,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Mot de passe oublié",
    },
    CONFIRM_EMAIL: {
      PATH: "/confirm-email",
      COMPONENT: ConfirmEmailPage,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Confirmer l'email",
    },
    TEST_PUBLIC: {
      PATH: "/test-public",
      COMPONENT: AppLayout,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Confirmer l'email",
    },
  },
  PRIVATE: {
    DASHBOARD: {
      PATH: "/dashboard",
      COMPONENT: () => React.createElement("h1", null, "Tableau de bord"),
      ICON: HouseIcon,
      HIDE_IN_MENU: false,
      LABEL: "Tableau de bord",
    },
    BUDGETS: {
      PATH: "/budgets",
      COMPONENT: () => React.createElement("h1", null, "Budgets"),
      ICON: PiggyBankIcon,
      HIDE_IN_MENU: false,
      LABEL: "Budgets",
    },
    TRANSACTIONS: {
      PATH: "/transactions",
      COMPONENT: () => React.createElement("h1", null, "Transactions"),
      ICON: PiggyBankIcon,
      HIDE_IN_MENU: false,
      LABEL: "Transactions",
    },
    PROFILE: {
      PATH: "/profile",
      COMPONENT: () => React.createElement("h1", null, "Profil"),
      ICON: UserIcon,
      HIDE_IN_MENU: true,
      LABEL: "Profil",
    },
  },
  HOME: {
    FEATURES: {
      PATH: "/#features",
      COMPONENT: undefined,
      ICON: undefined,
      HIDE_IN_MENU: false,
      LABEL: "Fonctionnalités",
    },
    SECURITY: {
      PATH: "/#security",
      COMPONENT: undefined,
      ICON: undefined,
      HIDE_IN_MENU: false,
      LABEL: "Sécurité",
    },
    PRICING: {
      PATH: "/#pricing",
      COMPONENT: undefined,
      ICON: undefined,
      HIDE_IN_MENU: false,
      LABEL: "Tarifs",
    },
  },
  ERROR: {
    UNDER_CONSTRUCT: {
      PATH: "/under-construction",
      COMPONENT: UnderConstructionPage,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Page en construction",
    },
    NOT_FOUND: {
      PATH: "/not-found",
      COMPONENT: PageNotFound,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Page non trouvée",
    },
  },
} as const;

export type PathType = typeof PATHS;
export type PublicPathType = typeof PATHS.PUBLIC;
export type PrivatePathType = typeof PATHS.PRIVATE;
export type ErrorPathType = typeof PATHS.ERROR;
export type HomePathType = typeof PATHS.HOME;
