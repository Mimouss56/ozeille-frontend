import type { Icon } from "@phosphor-icons/react";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonStyle = cva(["btn"], {
  variants: {
    size: {
      sm: ["btn-sm"],
      md: null,
      lg: ["btn-lg"],
      xl: ["btn-xl"],
    },
    style: {
      primary: ["btn-primary"],
      secondary: ["btn-secondary"],
      outline: ["btn-outline"],
      ghost: ["btn-ghost"],
      danger: ["btn-error"],
      dangerOutline: ["btn-error btn-soft"],
      ghostOutline: ["focus:bg-bg-neutral/20 btn-ghost"],
    },
    disabled: {
      false: null,
      true: ["btn-disabled"],
    },
    loading: {
      false: null,
      true: ["btn-soft"],
    },
    join: {
      false: null,
      true: ["join-item"],
    },
  },
  defaultVariants: {
    size: "md",
    style: "primary",
    disabled: false,
    loading: false,
  },
});

export type ButtonVariants = VariantProps<typeof buttonStyle>;

export type ButtonProps = ButtonVariants & {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: Icon;
};

const renderIcon = (icon: Icon) => {
  if (!icon) return null;
  const IconComponent = icon;
  return <IconComponent size={20} />;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", icon, ...styleProps }) => {
  return (
    <button
      type={type}
      className={buttonStyle(styleProps)}
      disabled={styleProps.disabled || styleProps.loading}
      onClick={onClick}>
      {icon && <span className="mr-2">{renderIcon(icon)}</span>}
      {styleProps.loading && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
};
