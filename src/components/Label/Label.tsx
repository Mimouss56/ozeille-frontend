import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const labelStyle = cva([], {
  variants: {
    for: {
      floating: ["floating-label"],
      input: ["input"],
      select: ["select"],
      label: ["label"],
    },
    fill: {
      false: null,
      true: ["w-full"],
    },
  },
  defaultVariants: {
    for: "input",
  },
});

export type LabelVariants = VariantProps<typeof labelStyle>;

export type LabelProps = LabelVariants & {
  children: React.ReactNode;
};

export const Label: React.FC<LabelProps> = ({ children, ...styleProps }) => {
  return <label className={labelStyle(styleProps)}>{children}</label>;
};
