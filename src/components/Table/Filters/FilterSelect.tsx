import React from "react";

import { Select, type SelectOption } from "../../Form/Select/Select";

export interface FilterSelectOption {
  id: string;
  label: string;
}

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: FilterSelectOption[];
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
  // Conversion des FilterSelectOption vers SelectOption
  const selectOptions: SelectOption[] = options.map((option) => ({
    label: option.label,
    value: option.id,
  }));

  return (
    <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()} role="none">
      <Select
        id={`filter-select-${label.toLowerCase().replace(/\s+/g, "-")}`}
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        options={selectOptions}
        placeholder={emptyLabel}
        size="xs"
        style="neutral"
      />
    </div>
  );
};
