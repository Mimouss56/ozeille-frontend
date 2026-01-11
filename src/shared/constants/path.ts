import { HouseIcon, PiggyBankIcon, SignInIcon, UserIcon } from "@phosphor-icons/react";

import { Login } from "../../pages/Auth/Login/Login";
import { Register } from "../../pages/Auth/Register/Register";
import { Budget } from "../../pages/Budgets/Budget";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { HomePage } from "../../pages/HomePage/HomePage";
import { Transaction } from "../../pages/Transactions/Transaction";

export const PATHS = {
  PUBLIC: {
    HOME: {
      PATH: "/",
      COMPONENT: HomePage,
      ICON: undefined,
      HIDE_IN_MENU: false,
    },
    LOGIN: {
      PATH: "/login",
      COMPONENT: Login,
      ICON: SignInIcon,
      HIDE_IN_MENU: true,
      LABEL: "Se connecter",
    },
    REGISTER: {
      PATH: "/register",
      COMPONENT: Register,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "S'inscrire",
    },
    FORGOT_PASSWORD: {
      PATH: "/forgot-password",
      COMPONENT: undefined,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Mot de passe oublié",
    },
    CONFIRM_EMAIL: {
      PATH: "/confirm-email",
      COMPONENT: undefined,
      ICON: undefined,
      HIDE_IN_MENU: true,
      LABEL: "Confirmer l'email",
    },
  },
  PRIVATE: {
    DASHBOARD: {
      PATH: "/dashboard",
      COMPONENT: Dashboard,
      ICON: HouseIcon,
      HIDE_IN_MENU: false,
      LABEL: "Tableau de bord",
    },
    BUDGETS: {
      PATH: "/budgets",
      COMPONENT: Budget,
      ICON: PiggyBankIcon,
      HIDE_IN_MENU: false,
      LABEL: "Budgets",
    },
    TRANSACTIONS: {
      PATH: "/transactions",
      COMPONENT: Transaction,
      ICON: PiggyBankIcon,
      HIDE_IN_MENU: false,
      LABEL: "Transactions",
    },
    PROFILE: {
      PATH: "/profile",
      COMPONENT: undefined,
      ICON: UserIcon,
      HIDE_IN_MENU: true,
      LABEL: "Profil",
    },
  },
  HOME: {
    FEATURES: {
      PATH: "#features",
      COMPONENT: undefined,
      ICON: undefined,
      HIDE_IN_MENU: false,
      LABEL: "Fonctionnalités",
    },
    SECURITY: {
      PATH: "#security",
      COMPONENT: undefined,
      ICON: undefined,
      HIDE_IN_MENU: false,
      LABEL: "Sécurité",
    },
    PRICING: {
      PATH: "#pricing",
      COMPONENT: undefined,
      ICON: undefined,
      HIDE_IN_MENU: false,
      LABEL: "Tarifs",
    },
  },
} as const;
