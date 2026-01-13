import type { ReactNode } from "react";

interface StatusCardProps {
  children: ReactNode;
  variant?: "neutral" | "success" | "error";
}

export function StatusCard({ children, variant = "neutral" }: StatusCardProps) {
  const textColors = {
    neutral: "text-gray-600 font-semibold",
    success: "text-green-600 font-semibold",
    error: "text-red-600 font-semibold",
  };

  return <p className={textColors[variant]}>{children}</p>;
}
