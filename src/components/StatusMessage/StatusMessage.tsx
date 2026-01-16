import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

const statusMessageStyle = cva(["font-semibold"], {
  variants: {
    layout: {
      box: "rounded-md border flex items-center justify-center", // Box  
      text: "bg-transparent border-0 p-0", // Plain text
    },
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
  compoundVariants: [
    //Styles pour la box
    { layout: "box", size: "xs", className: "px-2 py-1" },
    { layout: "box", size: "sm", className: "px-4 py-2" },
    { layout: "box", size: "md", className: "px-4 py-2" },
    
    { layout: "box", style: "error", className: "border-red-200 bg-red-50" },
    { layout: "box", style: "success", className: "border-green-200 bg-green-50" },
    { layout: "box", style: "neutral", className: "border-gray-200 bg-gray-50" },
    
    //Styles pour text
    { layout: "text", className: "mt-1" },
  ],
});

type StatusMessageVariants = VariantProps<typeof statusMessageStyle>;

type StatusMessageProps = StatusMessageVariants & {
  children: ReactNode;
  className?: string;
};

export function StatusMessage({ children, className, ...props }: StatusMessageProps) {
  return (
    <div className={`${statusMessageStyle(props)} ${className || ""}`}>
      {children}
    </div>
  );
}
