import React from "react";
import { cva, type VariantProps } from 'class-variance-authority';

const labelStyle = cva(['label', 'floating-label','text-neutral'], { 
    variants: {
    },
    defaultVariants: {
    }
});

export type LabelVariants = VariantProps<typeof labelStyle>

export type LabelProps = LabelVariants & {
    children: React.ReactNode; 
}

export const Label: React.FC<LabelProps> = ({
    children,
    ...styleProps
}) => {
    return (
        <label 
            className={labelStyle(styleProps)}
        >
            {children}
        </label>
    );
};