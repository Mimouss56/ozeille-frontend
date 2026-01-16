import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

const StatusMessageStyle = cva(["font-semibold"], {
  variants: {
    size: {
      xs: ["text-xs"],
      sm: ["text-sm"],
      md: ["text-base"],
    },
    style: {
      success: ["text-success"],
      neutral: ["text-neutral"],
      error: ["text-error"],
    },
  },
  defaultVariants: {
    style: "neutral",
    size: "md",
  },
});

type StatusMessageVariants = VariantProps<typeof StatusMessageStyle>;

type StatusMessageProps = StatusMessageVariants & {
  children: ReactNode;
};

export function StatusMessage({ children, ...style }: StatusMessageProps) {
  return <p className={StatusMessageStyle(style)}>{children}</p>;
}
