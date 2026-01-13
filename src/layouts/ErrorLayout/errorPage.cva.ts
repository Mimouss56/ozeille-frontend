import { type VariantProps, cva } from "class-variance-authority";

export const errorPageCva = cva(
  "bg-gradient-radial relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden from-white to-[#e6e9ef] px-8 text-center",
  {
    variants: {
      size: {
        default: "py-12",
        compact: "py-4",
      },
      color: {
        default: "",
        warning: "bg-yellow-50",
        danger: "bg-red-50",
      },
    },
    defaultVariants: {
      size: "default",
      color: "default",
    },
  },
);

export type ErrorPageCvaProps = VariantProps<typeof errorPageCva>;
