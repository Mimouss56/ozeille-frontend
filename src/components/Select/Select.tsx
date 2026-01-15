import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { Label } from "../Label/Label.tsx";
import { StatusMessage } from "../StatusMessage/StatusMessage.tsx";

const selectStyle = cva(["select"], {
  variants: {
    size: {
      xs: ["select-xs"],
      sm: ["select-sm"],
      md: ["select-md"], // Défaut
      lg: ["select-lg"],
      xl: ["select-xl"],
    },
    style: {
      neutral: ["select-neutral"], // Défaut
      primary: ["select-primary"],
      secondary: ["select-secondary"],
      accent: ["select-accent"],
      info: ["select-info"],
      success: ["select-success"],
      warning: ["select-warning"],
      error: ["select-error"],
      ghost: ["select-ghost"],
    },
  },
  defaultVariants: {
    size: "md",
    style: "neutral",
  },
});

export type SelectOption = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

export type SelectVariants = VariantProps<typeof selectStyle>;

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> &
  SelectVariants & {
    /**
     * ID of the select input
     */
    id: string;
    /**
     * Label for the select input
     */
    label: string;
    /**
     * Help text to display below the select input
     */
    helperText?: string;
    /**
     * Options to display in the select input
     */
    options: SelectOption[];
    /**
     * Placeholder text to display when there is no option selected
     */
    placeholder?: string;
    /**
     * Value of the selected option
     */
    value: string;
    /**
     * Callback function to handle value change
     */
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };

export const Select: React.FC<SelectProps> = ({
  size,
  style,
  label,
  helperText,
  id,
  options,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  const helpTextStyle = style === "error" ? "error" : "neutral";

  return (
    <div className="flex flex-col gap-2">
      <Label for="select" fill size={size}>
        <span className="label">{label}</span>
        <select id={id} className={selectStyle({ size, style })} value={value} onChange={onChange} {...props}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
      </Label>

      {helperText && (
        <StatusMessage size="xs" style={helpTextStyle}>
          {helperText}
        </StatusMessage>
      )}
    </div>
  );
};
