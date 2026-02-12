import React from "react";

import { InputField } from "../../Form/InputField/InputField";
import type { FilterSelectOption } from "./FilterSelect";

/**
 * Métadonnées de filtrage pour les colonnes
 */
export interface FilterableColumnMeta {
  /** Placeholder pour FilterInput (ignoré si filterOptions est fourni) */
  filterPlaceholder?: string;
  /** Options pour FilterSelect (si présent, remplace FilterInput) */
  filterOptions?: FilterSelectOption[];
  /** Label pour l'option vide de FilterSelect */
  filterEmptyLabel?: string;
}

interface FilterInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
}

export const FilterInput: React.FC<FilterInputProps> = ({ value, onChange, placeholder = "Rechercher...", label }) => {
  return (
    <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()} role="none">
      <InputField
        id={`filter-input-${label.toLowerCase().replace(/\s+/g, "-")}`}
        name={`filter-${label}`}
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size="md"
        style="neutral"
      />
    </div>
  );
};
