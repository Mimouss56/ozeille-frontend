import { type VariantProps, cva } from "class-variance-authority";
import React, { type ChangeEvent } from "react";

import type { BaseInput } from "../InputField/type.ts";
import { Label } from "../Label/Label.tsx";
import { StatusMessage } from "../StatusMessage/StatusMessage.tsx";

const checkboxStyle = cva(["checkbox"], {
  variants: {
    size: {
      xs: ["checkbox-xs"],
      sm: ["checkbox-sm"],
      md: ["checkbox-md"],
      lg: ["checkbox-lg"],
      xl: ["checkbox-xl"],
    },
    style: {
      primary: ["checkbox-primary"],
      secondary: ["checkbox-secondary"],
      accent: ["checkbox-accent"],
      neutral: ["checkbox-neutral"],
      success: ["checkbox-success"],
      info: ["checkbox-info"],
      error: ["checkbox-error"],
    },
    disabled: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },
  defaultVariants: {
    size: "md",
    style: "neutral",
    disabled: false,
  },
});

const toggleStyle = cva(["toggle"], {
  variants: {
    size: {
      xs: ["toggle-xs"],
      sm: ["toggle-sm"],
      md: ["toggle-md"],
      lg: ["toggle-lg"],
      xl: ["toggle-xl"],
    },
    style: {
      primary: ["toggle-primary"],
      secondary: ["toggle-secondary"],
      accent: ["toggle-accent"],
      neutral: ["toggle-neutral"],
      success: ["toggle-success"],
      info: ["toggle-info"],
      error: ["toggle-error"],
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

type CheckboxVariants = VariantProps<typeof checkboxStyle>;
type ToggleVariants = VariantProps<typeof toggleStyle>;

type PlacedLabelProps = {
  placement: "left" | "right";
  rightLabel?: never;
};

type PlacedSideProps = {
  placement: "both";
  /**
   * Label of the left side of the toggle
   */
  label: string;
  /**
   * Label of the right side of the toggle
   */
  rightLabel: string;
};

type CheckboxInputProps = (CheckboxVariants | ToggleVariants) &
  (PlacedLabelProps | PlacedSideProps) &
  BaseInput & {
    value: boolean;
    /**
     * Change the aspect of the checkbox to a toggle
     */
    toggleMode?: boolean;
    /**
     * Callback when the input value changes
     */
    onChange: (value: boolean) => void;
  };

export const Checkbox: React.FC<CheckboxInputProps> = ({
  id,
  label,
  name,
  value,
  helperText,
  readOnly,
  onChange,
  size,
  style,
  disabled,
  placement = "right",
  ...props
}) => {
  const helpTextStyle = style === "error" ? "error" : "neutral";

  const componentStyle = () => {
    return props.toggleMode ? toggleStyle({ size, style, disabled }) : checkboxStyle({ size, style, disabled });
  };

  const leftLabel = () => {
    if (placement == "right") return null;
    return <span>{label}</span>;
  };

  const rightLabel = () => {
    if (placement == "left") return null;
    if (placement == "both") return <span>{props.rightLabel}</span>;
    return <span>{label}</span>;
  };

  return (
    <div className="flex flex-col gap-2">
      <Label for="label">
        {leftLabel()}
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={value}
          readOnly={readOnly}
          disabled={disabled || false}
          className={componentStyle()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
        />
        {rightLabel()}
      </Label>
      {helperText && (
        <StatusMessage size="xs" style={helpTextStyle}>
          {helperText}
        </StatusMessage>
      )}
    </div>
  );
};
