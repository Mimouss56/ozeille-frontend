import { HouseIcon, PiggyBankIcon, UserIcon } from "@phosphor-icons/react";

import type { NavItem } from "./useRoutes";

export const privateRoutes: NavItem[] = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: <HouseIcon size={24} />,
    protected: true,
    component: undefined,
    hideInMenu: false,
  },
  {
    to: "/budgets",
    label: "Budgets",
    icon: <PiggyBankIcon size={24} />,
    protected: true,
    component: undefined,
    hideInMenu: false,
  },
  {
    to: "/transactions",
    label: "Transactions",
    icon: <PiggyBankIcon size={24} />,
    protected: true,
    component: undefined,
    hideInMenu: false,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: <UserIcon size={24} />,
    protected: true,
    component: undefined,
    hideInMenu: false,
  },
];
