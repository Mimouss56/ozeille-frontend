import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import type { Table } from "@tanstack/react-table";
import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

// Définition des variantes du conteneur de pagination
const paginationContainerStyle = cva("join justify-self-center", {
  variants: {
    size: {
      sm: "gap-0.5",
      md: "gap-1",
      lg: "gap-1.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// Définition des variantes du bouton de pagination
const paginateButtonStyle = cva("btn join-item min-w-[2.5rem] transition-all duration-200", {
  variants: {
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    active: {
      true: "btn-primary",
      false: "btn-outline hover:btn-primary hover:btn-outline",
    },
    disabled: {
      true: "btn-disabled cursor-not-allowed opacity-50",
      false: "",
    },
  },
  compoundVariants: [
    {
      active: true,
      disabled: false,
      className: "shadow-sm",
    },
  ],
  defaultVariants: {
    size: "sm",
    active: false,
    disabled: false,
  },
});

export type PaginationContainerVariants = VariantProps<typeof paginationContainerStyle>;
export type PaginateButtonVariants = VariantProps<typeof paginateButtonStyle>;

interface PaginateButtonProps extends PaginateButtonVariants {
  label: string | ReactNode;
  onClick?: () => void;
}

const PaginateButton = ({ label, active, disabled, size, onClick }: PaginateButtonProps) => (
  <button
    type="button"
    className={paginateButtonStyle({ active: active ?? false, disabled: disabled ?? false, size })}
    disabled={disabled ?? false}
    onClick={onClick}>
    {label}
  </button>
);

export type PaginationProps<T> = PaginationContainerVariants & {
  table: Table<T>;
  currentPage: number;
  /** Nombre de pages affichées de chaque côté de la page courante */
  step?: number;
};

const Pagination = <T,>({ table, currentPage, size, step = 3 }: PaginationProps<T>) => {
  const buttons = Array.from(
    {
      length: table.getPageCount(),
    },
    (_, index) => {
      // The first and the last page are always displayed
      const isMandatory = index == 0 || index == table.getPageCount() - 1;

      const isMinShowed = currentPage - step < index;
      const isMaxShowed = index < currentPage + step;
      const isShowed = isMinShowed && isMaxShowed;

      // Check if all conditions are met
      const isDisplayed = isMandatory || isShowed;

      if (isDisplayed) {
        return (
          <PaginateButton
            key={index}
            label={index + 1}
            active={index == currentPage}
            size={size}
            onClick={() => table.setPageIndex(index)}
          />
        );
      }

      const isSkipped = currentPage - step == index || currentPage + step == index;
      if (isSkipped) {
        return <PaginateButton key={index} disabled label="..." size={size} />;
      }

      return null;
    },
  );

  return (
    <div className={paginationContainerStyle({ size })}>
      <PaginateButton
        label={<ArrowLeftIcon size={16} />}
        size={size}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      />
      {buttons}
      <PaginateButton
        label={<ArrowRightIcon size={16} />}
        size={size}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      />
    </div>
  );
};

export { Pagination };
