// frontend/src/components/Table/Filters/FilterInput.tsx
import type { SelectOption } from "../../Form/Select/Select";

export interface FilterableColumnMeta {
  filterPlaceholder?: string;
  filterOptions?: SelectOption[];
  filterEmptyLabel?: string;
  onChange?: (value: string) => void;
  isServerSide?: boolean;
}
