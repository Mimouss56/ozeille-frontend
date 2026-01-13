import type { ReactNode } from "react";

export interface NavItem {
  to: string;
  label: string;
  icon?: ReactNode;
  protected?: boolean;
  component: ReactNode;
  hideInMenu?: boolean;
}

// Ajout d'une fonction pour fournir des valeurs par défaut
export const defaultNavItem: NavItem = {
  protected: false,
  hideInMenu: false,
  to: "",
  label: "",
  component: undefined,
};
