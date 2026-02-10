import React from "react";

interface FilterInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
}

export const FilterInput: React.FC<FilterInputProps> = ({ value, onChange, placeholder = "Rechercher...", label }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-medium">{label}</div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input input-bordered input-xs"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
