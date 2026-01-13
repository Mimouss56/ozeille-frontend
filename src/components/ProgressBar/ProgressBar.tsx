import { type VariantProps, cva } from "class-variance-authority";

const progressBarStyle = cva(["progress", "w-full"], {
  variants: {
    color: {
      neutral: ["progress-neutral"], // Budget à 0/max
      success: ["progress-success"], // Budget OK
      warning: ["progress-warning"], // Budget limite)
      error: ["progress-error"], // Rouge Budget dépassé
    },
  },
  defaultVariants: {
    color: "success",
  },
});

export type ProgressBarVariants = VariantProps<typeof progressBarStyle>;

export type ProgressBarProps = React.ProgressHTMLAttributes<HTMLProgressElement> &
  ProgressBarVariants & {
    className?: string;
    value?: number; // Valeur actuelle
    max?: number; // Valeur max (par défaut 100)
  };

export const ProgressBar: React.FC<ProgressBarProps> = ({ className, color, value = 0, max = 100, ...props }) => {
  return (
    <div className="flex w-full flex-col">
      <progress className={progressBarStyle({ color, className })} value={value} max={max} {...props} />
    </div>
  );
};
