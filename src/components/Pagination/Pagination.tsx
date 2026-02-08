import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import type { Table } from "@tanstack/react-table";
import { type VariantProps, cva } from "class-variance-authority";
import dayjs from "dayjs";
import type { ReactNode } from "react";

// Définition des variantes du conteneur de pagination
const paginationContainerStyle = cva("flex items-center gap-1 overflow-x-auto scrollbar-hide scroll-smooth", {
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
const paginateButtonStyle = cva("btn transition-all duration-200 flex-shrink-0", {
  variants: {
    size: {
      sm: "btn-sm min-w-[2.5rem]",
      md: "btn-md min-w-[2.5rem]",
      lg: "btn-lg min-w-[3rem]",
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

// Types pour la pagination avec Table
export type PaginationProps<T> = PaginationContainerVariants & {
  table: Table<T>;
  currentPage: number;
  step?: number;
};

// Types pour la pagination avec dates (comme DateTimeline)
export interface DateItem {
  month: string; // Format "YYYY-MM"
  totalIncome: number;
  totalExpenses: number;
}

export interface DatePaginationProps extends PaginationContainerVariants {
  items: DateItem[];
  currentPeriod: string; // Format "YYYY-MM"
  onPeriodChange: (period: string) => void;
  step?: number;
}

// Helper pour calculer l'indicateur de couleur basé sur la balance
const getIndicatorColor = (item: DateItem): string => {
  const balance = Number(item.totalIncome) - Number(item.totalExpenses);
  return balance >= 0 ? "bg-success" : "bg-error";
};

// Component pour afficher les dates
const DatePaginationButton = ({
  item,
  isActive,
  onClick,
}: {
  item: DateItem;
  isActive: boolean;
  onClick: () => void;
}) => {
  const date = dayjs(item.month, "YYYY-MM");
  const indicatorColor = getIndicatorColor(item);
  const classNameActiveSelection = isActive
    ? "z-10 bg-linear-to-b from-white to-gray-300 text-neutral-900 shadow-lg"
    : "hover:bg-base-200 hover:text-neutral text-neutral-400";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex min-w-17.5 flex-col items-center justify-center rounded-lg py-2 transition-all duration-300 ${classNameActiveSelection}`}>
      <span className="text-[9px] font-semibold opacity-60">{date.format("YYYY")}</span>
      <span className="text-sm font-bold capitalize">{date.format("MMM")}</span>
      <div className={`mt-1 h-1 w-5 rounded-full ${indicatorColor} ${isActive ? "shadow-sm" : "opacity-70"}`} />
    </button>
  );
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

// Composant de pagination spécialisé pour les dates
const DatePagination = ({ items, currentPeriod, onPeriodChange, size = "md", step = 6 }: DatePaginationProps) => {
  const currentIndex = items.findIndex((item) => item.month === currentPeriod);

  const isFirstPage = currentIndex <= 0;
  const isLastPage = currentIndex >= items.length - 1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onPeriodChange(items[currentIndex - 1].month);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onPeriodChange(items[currentIndex + 1].month);
    }
  };

  const buttons = items
    .map((item, index) => {
      const isMandatory = index === 0 || index === items.length - 1;
      const isMinShowed = currentIndex - step < index;
      const isMaxShowed = index < currentIndex + step;
      const isShowed = isMinShowed && isMaxShowed;
      const isDisplayed = isMandatory || isShowed;

      if (isDisplayed) {
        return (
          <DatePaginationButton
            key={item.month}
            item={item}
            isActive={item.month === currentPeriod}
            onClick={() => onPeriodChange(item.month)}
          />
        );
      }

      const isSkipped = currentIndex - step === index || currentIndex + step === index;
      if (isSkipped) {
        return <PaginateButton key={`skip-${items[index]?.month || index}`} disabled label="..." size={size} />;
      }

      return null;
    })
    .filter(Boolean);

  return (
    <div className={paginationContainerStyle({ size })}>
      <PaginateButton label={<ArrowLeftIcon size={16} />} size={size} onClick={handlePrevious} disabled={isFirstPage} />
      {buttons}
      <PaginateButton label={<ArrowRightIcon size={16} />} size={size} onClick={handleNext} disabled={isLastPage} />
    </div>
  );
};

export { Pagination, DatePagination };
