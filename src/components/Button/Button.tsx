import React from "react";
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyle = cva(['btn'], {
  variants: {
    size: {
      sm: ['btn-sm'],
      md: null,
      lg: ['btn-lg'],
      xl: ['btn-xl']
    },
    style: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary'],
      outline: ['btn-outline']
    },
    disabled: {
      false: null,
      true: ['btn-disabled']
    },
    loading: {
      false: null,
      true: ['btn-soft']
    }
  },
  defaultVariants: {
    size: 'md',
    style: 'primary',
    disabled: false,
    loading: false,
  }
});

export type ButtonVariants = VariantProps<typeof buttonStyle>

export type ButtonProps = ButtonVariants & {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  ...styleProps
}) => {
  return (
    <button
      type={type}
      className={ buttonStyle(styleProps) }
      disabled={styleProps.disabled || styleProps.loading}
      onClick={onClick}
    >
      {styleProps.loading && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
};
