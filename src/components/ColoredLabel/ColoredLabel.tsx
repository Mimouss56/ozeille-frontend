import React from "react";

interface ColoredLabelProps {
  label: string;
  color?: string;
}

export const ColoredLabel: React.FC<ColoredLabelProps> = ({ label, color = "#F0F0F0" }) => {
  return (
    <span className="border-b-4 pb-0.5" style={{ borderBottomColor: color } as React.CSSProperties}>
      {label}
    </span>
  );
};
