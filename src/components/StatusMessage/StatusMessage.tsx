import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

const statusMessageStyle = cva(["font-semibold"], {
  variants: {
    layout: {
      box: "alert flex items-center justify-center text-center gap-2", // Box
      text: "text-xs mt-1 bg-transparent p-0 border-0", // Texte
    },
    status: {
      info: "info",
      success: "success",
      warning: "warning",
      error: "error",
      neutral: "neutral",
    },
    variant: {
      default: "",
      outline: "alert-outline",
      soft: "alert-soft",
      dash: "alert-dash",
    },
  },
  compoundVariants: [
    // Styles pour la box
    { layout: "box", status: "info", className: "alert-info" },
    { layout: "box", status: "success", className: "alert-success" },
    { layout: "box", status: "warning", className: "alert-warning" },
    { layout: "box", status: "error", className: "alert-error" },

    // Styles pour le texte
    { layout: "text", status: "info", className: "text-info" },
    { layout: "text", status: "success", className: "text-success" },
    { layout: "text", status: "warning", className: "text-warning" },
    { layout: "text", status: "error", className: "text-error" },
    { layout: "text", status: "neutral", className: "text-gray-500" },
  ],
  defaultVariants: {
    layout: "text",
    status: "neutral",
    variant: "soft",
  },
});

type StatusMessageVariants = VariantProps<typeof statusMessageStyle>;

type StatusMessageProps = StatusMessageVariants & {
  children: ReactNode;
  className?: string;
};

export function StatusMessage({ children, className, ...props }: StatusMessageProps) {
  return <div className={`${statusMessageStyle(props)} ${className || ""}`}>{children}</div>;
}
