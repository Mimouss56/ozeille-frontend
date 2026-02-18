import React from "react";

interface FilterHeaderWrapperProps {
  children: React.ReactNode;
}

export const FilterHeaderWrapper: React.FC<FilterHeaderWrapperProps> = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
