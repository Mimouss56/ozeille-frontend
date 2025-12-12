import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const labelStyle = cva(["label", "floating-label", "text-neutral"], {
  variants: {},
  defaultVariants: {},
});

export type LabelVariants = VariantProps<typeof labelStyle>;

export type LabelProps = LabelVariants & {
  children: React.ReactNode;
};

export const Label: React.FC<LabelProps> = ({ children, ...styleProps }) => {
  return <label className={labelStyle(styleProps)}>{children}</label>;
};
