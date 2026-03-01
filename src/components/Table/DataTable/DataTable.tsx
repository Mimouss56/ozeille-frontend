import type { PaginationState, ColumnDef as TankStackColumnDef } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { type Dispatch, type ReactNode, type SetStateAction, useCallback, useEffect, useMemo, useState } from "react";

import type { CurrencyOptions } from "../../../utils/currency";
import { InputField } from "../../Form/InputField/InputField";
import { Select } from "../../Form/Select/Select";
import { OzeilleLoader } from "../../Loader/OzeilleLoader";
import { Pagination } from "../../Pagination/Pagination";
import type { FilterableColumnMeta } from "../Filters/FilterInput";

// Typage strict de ta définition de colonne personnalisée
export type ColumnDef<T> = Omit<TankStackColumnDef<T, unknown>, "accessorKey"> & {
  accessorKey?: keyof T;
  enableFiltering?: boolean;
  options?: FilterableColumnMeta;
  currency?: boolean | CurrencyOptions;
};

// ---------------------------------------------------------------------------
// 🛡️ NOUVEAU : SOUS-COMPOSANT ISOLÉ (100% Typé, Générique <T>)
// ---------------------------------------------------------------------------
const ColumnFilter = <T,>({
  columnDef,
  columnId,
  headerLabel,
  resetFiltersSignal,
  setTableFilters,
}: {
  columnDef: ColumnDef<T>; // 👈 Remplacement de `any` par le vrai type générique
  columnId: string;
  headerLabel: string;
  resetFiltersSignal?: number;
  setTableFilters: Dispatch<SetStateAction<Record<string, string>>>;
}) => {
  const [localValue, setLocalValue] = useState("");

  // TypeScript déduit correctement les types ici grâce à ColumnDef<T>
  const customOnChange = columnDef.options?.onChange;
  const filterOptions = columnDef.options?.filterOptions;
  const filterPlaceholder = columnDef.options?.filterPlaceholder || "Rechercher...";
  const filterEmptyLabel = columnDef.options?.filterEmptyLabel || "Toutes";

  // Suppression de l'effet pour éviter le setState direct dans useEffect

  // Logique de Debounce (uniquement pour les champs texte)
  useEffect(() => {
    // Les selects n'ont pas besoin de délai
    if (filterOptions && filterOptions.length > 0) return;

    const timeoutId = setTimeout(() => {
      setTableFilters((prev) => ({ ...prev, [columnId]: localValue }));

      if (customOnChange) {
        // Appel API uniquement si >= 3 caractères ou si le champ est vidé
        if (localValue.length === 0 || localValue.length >= 3) {
          customOnChange(localValue);
        }
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [localValue, columnId, customOnChange, filterOptions, setTableFilters]);

  // --- RENDU DU FILTRE ---
  if (filterOptions && filterOptions.length > 0) {
    return (
      <Select
        key={resetFiltersSignal}
        id={`filter-select-${headerLabel.toLowerCase().replaceAll(/\s+/g, "-")}`}
        label={headerLabel}
        value={localValue}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const val = e?.target === undefined ? String(e) : e.target.value;
          setLocalValue(val);
          setTableFilters((prev) => ({ ...prev, [columnId]: val }));
          if (customOnChange) customOnChange(val);
        }}
        // 👈 Plus de `.map((opt: any))` ! filterOptions est déjà du type `SelectOption[]`
        options={filterOptions}
        placeholder={filterEmptyLabel}
        size="xs"
        style="neutral"
      />
    );
  }

  return (
    <InputField
      key={resetFiltersSignal}
      id={`filter-input-${headerLabel.toLowerCase().replaceAll(/\s+/g, "-")}`}
      name={`filter-${headerLabel}`}
      label={headerLabel}
      value={localValue}
      onChange={(val: string) => setLocalValue(val)}
      placeholder={filterPlaceholder}
      size="md"
      style="neutral"
    />
  );
};

// ---------------------------------------------------------------------------
// 📊 COMPOSANT PRINCIPAL DATATABLE
// ---------------------------------------------------------------------------
export const DataTable = <T,>({
  data,
  columns,
  paginated,
  pageSize = 10,
  totalPage,
  currentPage,
  setCurrentPage,
  isFiltering,
  filterElement,
  resetFiltersSignal,
  loading,
}: {
  data: T[];
  columns: ColumnDef<T>[];
  paginated?: boolean;
  pageSize?: number;
  totalPage?: number;
  currentPage?: PaginationState;
  setCurrentPage?: Dispatch<SetStateAction<PaginationState>>;
  isFiltering?: boolean | { placeholder?: string };
  filterElement?: ReactNode;
  resetFiltersSignal?: number;
  loading?: boolean;
}) => {
  const [page, setPage] = useState<PaginationState>({ pageIndex: 0, pageSize });
  const [filters, setFilters] = useState<Record<string, string>>({});

  const resetAllFilters = useCallback(() => {
    setFilters({});
    columns.forEach((column) => {
      if (column.enableFiltering && column.options?.onChange) {
        column.options.onChange("");
      }
    });
  }, [columns]);

  useEffect(() => {
    if (resetFiltersSignal === undefined) return;
    resetAllFilters();
  }, [resetFiltersSignal, resetAllFilters]);

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return Object.entries(filters).every(([columnId, filterValue]) => {
        if (!filterValue) return true;

        const column = columns.find(
          (col) => col.id === columnId || ("accessorKey" in col && col.accessorKey === columnId),
        );
        if (!column) return true;

        if (column.options?.onChange) return true;

        // 👈 Typage strict (Record) au lieu d'un cast hasardeux
        const cellValue = (row as Record<string, unknown>)[columnId];
        if (cellValue === undefined || cellValue === null) return false;

        return String(cellValue).toLowerCase().includes(filterValue.toLowerCase());
      });
    });
  }, [data, filters, columns]);

  const enrichedColumns = useMemo(() => {
    return columns.map((column) => {
      if (!column.enableFiltering) return column;

      const columnId = column.id || ("accessorKey" in column && String(column.accessorKey)) || "";
      const originalHeader = column.header;
      const headerLabel = typeof originalHeader === "string" ? originalHeader : columnId;

      return {
        ...column,
        header: () => (
          <ColumnFilter<T>
            columnDef={column}
            columnId={columnId}
            headerLabel={headerLabel}
            resetFiltersSignal={resetFiltersSignal}
            setTableFilters={setFilters}
          />
        ),
      };
    });
  }, [columns, resetFiltersSignal]);

  const table = useReactTable({
    data: filteredData,
    columns: enrichedColumns as TankStackColumnDef<T, unknown>[],
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setCurrentPage ?? setPage,
    state: { pagination: paginated ? (currentPage ?? page) : undefined },
    ...(totalPage
      ? { manualPagination: true, pageCount: totalPage }
      : { getPaginationRowModel: getPaginationRowModel() }),
  });

  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4">
      {(isFiltering || filterElement) && (
        <div className="flex items-end gap-3">
          {filterElement ||
            (isFiltering ? (
              <InputField
                id="global-table-filter"
                name="global-filter"
                label="Recherche"
                type="text"
                placeholder={
                  typeof isFiltering === "object" && isFiltering.placeholder ? isFiltering.placeholder : "Rechercher..."
                }
                size="sm"
                disabled
              />
            ) : null)}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-accent">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const columnDef = header.column.columnDef as ColumnDef<T>;
                  const alignRight = columnDef.currency ? "text-right" : "";
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className={`border-neutral/20 ${alignRight} align-bottom`}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {(() => {
              if (loading) {
                return (
                  <tr>
                    <td colSpan={table.getVisibleFlatColumns().length} className="py-20 text-center">
                      <div className="flex justify-center">
                        <OzeilleLoader />
                      </div>
                    </td>
                  </tr>
                );
              }
              if (table.getRowModel().rows.length === 0) {
                return (
                  <tr>
                    <td colSpan={table.getVisibleFlatColumns().length} className="text-neutral/50 py-20 text-center">
                      Aucune donnée trouvée
                    </td>
                  </tr>
                );
              }
              return table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    const columnDef = cell.column.columnDef as ColumnDef<T>;
                    const alignRight = columnDef.currency ? "text-right" : "";
                    return (
                      <td key={cell.id} className={`border-neutral/10 ${alignRight}`}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              ));
            })()}
          </tbody>
        </table>
      </div>

      {paginated && !loading && data.length > 0 && (
        <div className="flex justify-center">
          <Pagination table={table} currentPage={currentPage ? currentPage.pageIndex : page.pageIndex} />
        </div>
      )}
    </div>
  );
};
