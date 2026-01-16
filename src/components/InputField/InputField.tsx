import { type VariantProps, cva } from "class-variance-authority";
import React, { type ChangeEvent, type HTMLInputTypeAttribute } from "react";

import { Label } from "../Label/Label.tsx";
import { StatusMessage } from "../StatusMessage/StatusMessage.tsx";
import type { BaseInput } from "./type.ts";

const inputStyle = cva(["input", "w-full"], {
  variants: {
    size: {
      xs: ["input-xs"],
      sm: ["input-sm"],
      md: null,
      lg: ["input-lg"],
      xl: ["input-xl"],
    },
    style: {
      primary: ["input-primary"],
      secondary: ["input-secondary"],
      neutral: ["input-neutral"],
      accent: ["input-accent"],
      success: ["input-success"],
      info: ["input-info"],
      error: ["input-error"],
    },
    disabled: {
      false: null,
      true: null,
    },
  },
  defaultVariants: {
    size: "md",
    style: "neutral",
    disabled: false,
  },
});

type InputVariants = VariantProps<typeof inputStyle>;

type CommonProps = InputVariants &
  BaseInput & {
    /**
     * Value of the input
     */
    value?: string;
    /**
     * Placeholder of the input
     */
    placeholder: string;
    /**
     * Whether the input is required or not
     */
    required?: boolean;
    /**
     * Callback when the input value changes
     */
    onChange?: (value: string) => void;
  };

type StandardInputProps = CommonProps & {
  /**
   * Type of the input.
   */
  type?: Exclude<HTMLInputTypeAttribute, "button" | "reset" | "submit" | "number" | "checkbox">;
  min?: never;
  max?: never;
};

type NumberInputProps = CommonProps & {
  type: "number";
  min?: number;
  max?: number;
};

type InputFieldProps = StandardInputProps | NumberInputProps;

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  name,
  value,
  placeholder,
  helperText,
  type = "text",
  required,
  readOnly,
  onChange,
  size,
  style,
  disabled,
  ...props
}) => {
  const helpTextStyle = style === "error" ? "error" : "neutral";

  const min = type === "number" ? props.min : undefined;
  const max = type === "number" ? props.max : undefined;

  return (
    <div className="flex flex-col gap-2">
      <Label for="floating" size={size} fill>
        <span>{label}</span>
        <input
          id={id}
          name={name}
          value={value}
          min={min}
          max={max}
          type={type}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          disabled={disabled || false}
          className={inputStyle({ size, style, disabled })}
          onChange={onChange ? (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value) : undefined}
        />
      </Label>
      {helperText && (
        <StatusMessage size="xs" style={helpTextStyle}>
          {helperText}
        </StatusMessage>
      )}
    </div>
  );
};
