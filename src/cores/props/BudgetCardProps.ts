import type { CategoryItem } from "../models/CategoryItem";

export type BudgetCardProps = {
    id: string;
    label: string;
    color: string;
    currentAmount: number;
    limitAmount: number;
    categories: CategoryItem[];
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
};