// components/BudgetForm/BudgetForm.tsx
// import { TrashIcon } from "@phosphor-icons/react";
import React, { useState } from "react";

import { type BudgetCardProps } from "../BudgetCard/BudgetCard";
import { InputField } from "../InputField/InputField";
import { Label } from "../Label/Label";

export type BudgetFormData = Pick<BudgetCardProps, "label" | "color" | "limitAmount" | "categories">;

interface BudgetFormProps {
  onSubmit: (data: BudgetFormData) => void;
  onCancel: () => void;
  initialData?: Partial<BudgetFormData>;
  formRef?: React.Ref<HTMLFormElement>;
}

export function BudgetForm({ onSubmit, onCancel, initialData, formRef }: BudgetFormProps) {
  const [formData, setFormData] = useState<BudgetFormData>({
    label: initialData?.label || "",
    color: initialData?.color || "#10b981",
    limitAmount: initialData?.limitAmount || 0,
    categories: initialData?.categories || [],
  });

  // const [newCategory, setNewCategory] = useState({
  //   label: "",
  //   limitAmount: 0,
  // });

  const [errors, setErrors] = useState({
    label: false,
    limitAmount: false,
    // categoryLabel: false,
    // categoryLimit: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.label.trim()) return;

    console.log("BudgetForm -> submit formData:", formData);
    onSubmit(formData);
  };

  // const addCategory = () => {
  //   if (!newCategory.label.trim() || newCategory.limitAmount <= 0) return;

  //   setFormData({
  //     ...formData,
  //     categories: [
  //       ...formData.categories,
  //       {
  //         id: `cat-${Date.now()}`,
  //         label: newCategory.label,
  //         currentAmount: 0,
  //         limitAmount: newCategory.limitAmount,
  //       } as CategoryItem,
  //     ],
  //   });

  //   setNewCategory({ label: "", limitAmount: 0 });
  // };

  // const removeCategory = (id: string) => {
  //   setFormData({
  //     ...formData,
  //     categories: formData.categories.filter((cat) => cat.id !== id),
  //   });
  // };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label>Nom du budget</Label>
        <InputField
          id=""
          name=""
          type="text"
          label=""
          onChange={(value) => setFormData({ ...formData, label: value })}
          placeholder="Ex: Courses alimentaires"
          value={formData.label}
          required
        />
      </div>

      <div className="space-y-1">
        <Label>Couleur</Label>
        <div className="pt-1">
          <input
            type="color"
            className="border-base-300 h-12 w-12 rounded-lg border-2 p-1"
            value={formData.color}
            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
          />
        </div>
      </div>

      {/* AMELIO peut-etre plus tard */}
      {/* <div className="space-y-1">
        <Label>Catégories (optionnel)</Label>

        {formData.categories.length > 0 && (
          <div className="mb-4 space-y-2">
            {formData.categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between gap-2 rounded-lg border p-2">
                <div className="flex-1">
                  <span className="font-medium">{category.label}</span>
                  <span className="text-neutral/70 ml-2 text-sm">{category.limitAmount} €</span>
                </div>
                <button type="button" className="" onClick={() => removeCategory(category.id)}>
                  <TrashIcon size={24} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2 pt-2">
          <div className="flex flex-col gap-2 sm:flex-row">
            <InputText
              id="category-name"
              name="category-name"
              placeholder="Ex: Fruits/Légumes"
              value={newCategory.label}
              onChange={(value) => setNewCategory({ ...newCategory, label: value })}
              size="md"
            />
            <InputText
              id="category-limit"
              name="category-limit"
              type="number"
              placeholder="60"
              value={newCategory.limitAmount.toString()}
              onChange={(value) =>
                setNewCategory({
                  ...newCategory,
                  limitAmount: Number(value) || 0,
                })
              }
              size="md"
            />
          </div>
          <button type="button" className="btn btn-primary btn-sm w-full sm:w-auto" onClick={addCategory}>
            Ajouter une catégorie
          </button>
        </div>
      </div> */}
    </form>
  );
}
