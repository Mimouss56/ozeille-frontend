import { cva, type VariantProps } from "class-variance-authority";
import React, { type HTMLInputTypeAttribute } from "react";

const inputStyle = cva(['input text-neutral outline-neutral border-neutral'], {
  variants: {
    size: {
      xs: ['input-xs'],
      sm: ['input-sm'],
      md: null,
      lg: ['input-lg'],
      xl: ['input-xl'],
    },
    style: {
      primary : ['input-primary'],
      secondary : ['input-secondary'],
      neutral : ['input-neutral'],
      accent : ['input-accent'],
      info : ['input-info'],
      error : ['input-error'],
    },
    disabled: { 
      false: null,
      true: null, 
    },
  },
  defaultVariants: {
    size: 'md',
    style: 'neutral',
    disabled: false,
  }
})

export type InputVariants = VariantProps<typeof inputStyle>


export type InputProps = InputVariants & {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  helperText?: string;
  type?: HTMLInputTypeAttribute
  required?: boolean
  readOnly?: boolean
  onChange: (value: string) => void;
}

export const InputText: React.FC<InputProps> = ({
  id,
  name,
  value,
  placeholder,
  helperText,
  type = "text",
  required,
  readOnly,
  onChange,
  ...styleProps
}) => {

  return (
    <div className="w-full">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        disabled={styleProps.disabled || false}
        onChange={(e) => onChange(e.target.value)}
        className={inputStyle(styleProps)}
      />

      {helperText && (
        <label className="label">
          <span className="label-text-alt text-neutral">{helperText}</span>
        </label>
      )}
    </div>
  );
}
