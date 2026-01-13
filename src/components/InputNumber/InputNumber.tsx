import { type VariantProps, cva } from "class-variance-authority";

const inputNumberStyle = cva(["input", "input-bordered", "w-full"], {
  variants: {
    size: {
      xs: ["input-xs"],
      sm: ["input-sm"],
      md: ["input-md"], // Défaut
      lg: ["input-lg"],
      xl: ["input-xl"],
    },
    style: {
      neutral: ["input-neutral"], // Défaut
      primary: ["input-primary"],
      secondary: ["input-secondary"],
      accent: ["input-accent"],
      info: ["input-info"],
      success: ["input-success"],
      warning: ["input-warning"],
      error: ["input-error"],
    },
  },
  defaultVariants: {
    size: "md",
    style: "neutral",
  },
});

export type InputNumberVariants = VariantProps<typeof inputNumberStyle>;

// On prend toutes les propriétés de <input> sauf size pour éviter un conflit avec la variante size
export type InputNumberProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
  InputNumberVariants & {
    label?: string;
    helperText?: string;
    className?: string;
  };

export const InputNumber: React.FC<InputNumberProps> = ({
  className,
  size,
  style,
  label,
  helperText,
  id,
  disabled,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text font-medium">{label}</span>
        </label>
      )}
      <input
        id={id}
        type="number"
        disabled={disabled}
        className={inputNumberStyle({ size, style, className })}
        {...props}
      />
      {helperText && (
        <label className="label">
          <span className="label-text-alt text-neutral-500">{helperText}</span>
        </label>
      )}
    </div>
  );
};
