import React from "react";
import { cva, type VariantProps } from 'class-variance-authority';

const checkboxStyle = cva(['checkbox'], {
  variants: {
    size: {
      xs: ['checkbox-xs'],
      sm: ['checkbox-sm'],
      md: null,
      lg: ['checkbox-lg'],
      xl: ['checkbox-xl']
    },
    style: {
      primary: ['checkbox-primary'],
      secondary: ['checkbox-secondary'],
      accent: ['checkbox-accent'],
      neutral: ['checkbox-neutral']
    },
     shape: {
      square: ['rounded-none'],
      rounded: ['rounded-md'],
      pill: ['rounded-full'],
    },
    disabled: {
      false: null,
      true: ['opacity-50', 'cursor-not-allowed']
    },
  },
  defaultVariants: {
    size: 'md',
    style: 'primary',
    shape: 'rounded',
    disabled: false,
  }
});

export type CheckboxVariants = VariantProps<typeof checkboxStyle>

export type CheckboxProps = CheckboxVariants & {
  type?: 'Checkbox';
}

export const Checkbox: React.FC<CheckboxProps> = ({
  type = 'Checkbox',
  ...styleProps
}) => {
  return (
    <input 
      type={type}
      className={checkboxStyle(styleProps)}
      disabled={styleProps.disabled || false}
    >
    </input>
  );
};
