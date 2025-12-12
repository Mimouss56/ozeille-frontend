import { cva, type VariantProps } from "class-variance-authority";

const selectStyle = cva(
    ['select', 'select-bordered', 'w-full'],
    {
        variants: {
            size: {
                xs: ['select-xs'],
                sm: ['select-sm'],
                md: ['select-md'], // Défaut
                lg: ['select-lg'],
                xl: ['select-xl'],
            },
            style: {
                neutral: ['select-neutral'], // Défaut
                primary: ['select-primary'],
                secondary: ['select-secondary'],
                accent: ['select-accent'],
                info: ['select-info'],
                success: ['select-success'],
                warning: ['select-warning'],
                error: ['select-error'],
                ghost: ['select-ghost'],
            },
        },
        defaultVariants: {
            size: 'md',
            style: 'neutral',
        }
    }
);

export type SelectOption = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

export type SelectVariants = VariantProps<typeof selectStyle>;

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> & 
  SelectVariants & {
    label?: string;
    helperText?: string;
    options?: SelectOption[];
    placeholder?: string;
  };

export const Select: React.FC<SelectProps> = ({
  className,
  size,
  style,
  label,
  helperText,
  id,
  options,
  placeholder,
  children,
  ...props
}) => {
  return (
    <div className="form-control w-full">
        {label && (
            <label className="label" htmlFor={id}>
            <span className="label-text font-medium">{label}</span>
            </label>
        )}

        <select
            id={id}
            className={selectStyle({ size, style, className })}
            {...props}
        >
            {placeholder && (
            <option value="" disabled selected={!props.value}>
                {placeholder}
            </option>
            )}

            {options?.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
            </option>
            ))}

            {!options && children}
        </select>

        {helperText && (
            <label className="label">
            <span className="label-text-alt text-neutral-500">{helperText}</span>
            </label>
        )}
    </div>
  );
};