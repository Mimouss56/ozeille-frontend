import { type VariantProps, cva } from "class-variance-authority";

import { generateRandomColor } from "./useColor";

const colorInputStyle = cva(["overflow-hidden", "rounded-full", "transition-all", "duration-200"], {
  variants: {
    size: {
      xs: ["h-6", "w-6"],
      sm: ["h-8", "w-8"],
      md: ["h-10", "w-10"],
      lg: ["h-12", "w-12"],
      xl: ["h-16", "w-16"],
    },
    style: {
      neutral: ["ring-2", "ring-neutral/20", "hover:ring-neutral/40"],
      primary: ["ring-2", "ring-primary/20", "hover:ring-primary/40"],
      secondary: ["ring-2", "ring-secondary/20", "hover:ring-secondary/40"],
      accent: ["ring-2", "ring-accent/20", "hover:ring-accent/40"],
      success: ["ring-2", "ring-success/20", "hover:ring-success/40"],
      info: ["ring-2", "ring-info/20", "hover:ring-info/40"],
      error: ["ring-2", "ring-error/20", "hover:ring-error/40"],
    },
    disabled: {
      false: ["cursor-pointer"],
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },
  defaultVariants: {
    size: "md",
    style: "neutral",
    disabled: false,
  },
});

type InputColorVariants = VariantProps<typeof colorInputStyle>;

interface InputColorProps extends InputColorVariants {
  id?: string;
  value?: string;
  onChange: (color: string) => void;
  className?: string;
  label?: string;
}

export const InputColor = ({
  id,
  value = generateRandomColor(),
  onChange,
  className = "",
  label,
  size,
  style,
  disabled,
}: InputColorProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div className={colorInputStyle({ size, style, disabled, className })}>
        <input
          id={id}
          type="color"
          className="h-full w-full cursor-pointer border-none disabled:cursor-not-allowed"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled || false}
        />
      </div>
    </div>
  );
};
