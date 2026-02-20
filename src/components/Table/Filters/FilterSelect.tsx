import React from "react";

import { Select, type SelectOption } from "../../Form/Select/Select";

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[]; // 👈 On utilise directement SelectOption, plus besoin de mapper !
  label: string;
  emptyLabel?: string;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({
  value,
  onChange,
  options,
  label,
  emptyLabel = "Toutes",
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()} role="none">
      <Select
        id={`filter-select-${label.toLowerCase().replace(/\s+/g, "-")}`}
        label={label}
        value={value}
        // 👇 Extrait la string nativement
        onChange={(e) => onChange(e.target.value)}
        options={options}
        placeholder={emptyLabel}
        size="xs"
        style="neutral"
      />
    </div>
  );
};
