import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const checkboxStyle = cva(["checkbox"], {
  variants: {
    size: {
      xs: ["checkbox-xs"],
      sm: ["checkbox-sm"],
      md: null,
      lg: ["checkbox-lg"],
      xl: ["checkbox-xl"],
    },
    style: {
      primary: ["checkbox-primary"],
      secondary: ["checkbox-secondary"],
      accent: ["checkbox-accent"],
      neutral: ["checkbox-neutral"],
    },
    shape: {
      square: ["rounded-none"],
      rounded: ["rounded-md"],
      pill: ["rounded-full"],
    },
    disabled: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },
  defaultVariants: {
    size: "md",
    style: "primary",
    shape: "rounded",
    disabled: false,
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxStyle>;

export type CheckboxProps = CheckboxVariants & {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  label?: string;
  "aria-label"?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ ...styleProps }) => {
  return <input type="checkbox" className={checkboxStyle(styleProps)} disabled={styleProps.disabled || false} />;
};
