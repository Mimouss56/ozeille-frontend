import React from "react";

interface BudgetDotProps {
  color: string;
  className?: string;
}

export const BudgetDot: React.FC<BudgetDotProps> = ({
  color,
  className = "h-4 w-4 rounded-full shadow-sm sm:h-5 sm:w-5",
}) => <div className={className} style={{ backgroundColor: color }} />;
