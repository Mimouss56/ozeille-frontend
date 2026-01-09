import { SignInIcon } from "@phosphor-icons/react";

import type { NavItem } from "./useRoutes";

export const publicRoutes: NavItem[] = [
  {
    to: "/login",
    label: "Login",
    icon: <SignInIcon size={24} />,
    protected: false,
    component: undefined,
    hideInMenu: true,
  },
  {
    to: "/register",
    label: "Register",
    protected: false,
    component: undefined,
    hideInMenu: true,
  },
  {
    to: "/forgot-password",
    label: "Forgot Password",
    protected: false,
    component: undefined,
    hideInMenu: true,
  },
  {
    to: "/confirm-email",
    label: "Confirm Email",
    protected: false,
    component: undefined,
    hideInMenu: true,
  },
];
