import { HouseIcon, PiggyBankIcon, SignInIcon, TagIcon, UserIcon, WalletIcon } from "@phosphor-icons/react";
import React from "react";

import { PrivateLayout } from "../../layouts/PrivateLayout/PrivateLayout";
import { TwoFAPage } from "../../pages/2FA/DoubleFAPage";
import { CategoryPage } from "../../pages/CategoryPage/CategoryPage";
import { ConfirmEmailPage } from "../../pages/ConfirmEmail/ConfirmEmail";
import { NotFoundPage } from "../../pages/Error/NotFoundPage/NotFoundPage";
import UnderConstructionPage from "../../pages/Error/UnderConstructPage/UnderConstructionPage";
import { ForgotPasswordPage } from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ResetPasswordPage } from "../../pages/ResetPasswordPage/ResetPasswordPage";
import { TransactionPage } from "../../pages/TransactionPage/TransactionPage";

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
      COMPONENT: LoginPage,
      ICON: SignInIcon,
      HIDE_IN_MENU: true,
      LABEL: "Se connecter",
    },
    REGISTER: {
      PATH: "/register",
      COMPONENT: RegisterPage,
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
    TWO_FA: {
      PATH: "/2fa",
      COMPONENT: TwoFAPage,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Double authentification",
    },
    TEST_PUBLIC: {
      PATH: "/test-public",
      COMPONENT: PrivateLayout,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Confirmer l'email",
    },
    RESET_PASSWORD: {
      PATH: "/reset-password",
      COMPONENT: ResetPasswordPage,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Réinitialiser le mot de passe",
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
    CATEGORIES: {
      PATH: "/categories",
      COMPONENT: CategoryPage,
      ICON: TagIcon,
      HIDE_IN_MENU: false,
      LABEL: "Categories",
    },
    PROFILE: {
      PATH: "/profile",
      COMPONENT: ProfilePage,
      ICON: UserIcon,
      HIDE_IN_MENU: true,
      LABEL: "Profil",
    },
    TRANSACTIONS: {
      PATH: "/transactions",
      COMPONENT: TransactionPage,
      ICON: WalletIcon,
      HIDE_IN_MENU: false,
      LABEL: "Transactions",
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
      COMPONENT: NotFoundPage,
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
