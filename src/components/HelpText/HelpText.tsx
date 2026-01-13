import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const TextStyle = cva([], {
  variants: {
    size: {
      xs: ["text-xs"],
      sm: ["text-sm"],
      md: ["text-base"],
    },
    style: {
      neutral: ["text-neutral/50"],
      error: ["text-error"],
    },
  },
  defaultVariants: {
    style: "neutral",
    size: "md",
  },
});

type TextVariants = VariantProps<typeof TextStyle>;

export type TextProps = TextVariants & {
  children: React.ReactNode;
};

export const HelpText: React.FC<TextProps> = ({ children, ...style }) => {
  return <p className={TextStyle(style)}>{children}</p>;
};
