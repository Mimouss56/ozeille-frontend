import { Spinner } from "phosphor-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { Budget } from "../../api/budgets";
import { BudgetCard } from "../../components/BudgetCard/BudgetCard";
import { type BudgetFormData } from "../../components/BudgetForm/BudgetForm";
import { InputField } from "../../components/InputField/InputField";
import { ModalBudget } from "../../components/Modal/ModalBudgets";
import { useBudgets } from "../../store";

const transformBudget = (budget: Budget) => ({
  id: budget.id,
  label: budget.label,
  color: budget.color || "#000",

  currentAmount: (budget.categories ?? []).reduce((sum, cat) => {
    const catAmount = cat.transactions?.reduce((s, tx) => s + Math.abs(tx.amount), 0) || 0;
    return sum + catAmount;
  }, 0),

  limitAmount: (budget.categories ?? []).reduce((sum, cat) => sum + Number(cat.limitAmount), 0),

  categories: (budget.categories ?? []).map((cat) => ({
    id: cat.id,
    label: cat.label,
    currentAmount: cat.transactions?.reduce((s, tx) => s + Math.abs(tx.amount), 0) || 0,
    limitAmount: Number(cat.limitAmount),
  })),
});

export function Budgets() {
  const [searchValue, setSearchValue] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const budgets = useBudgets.use.budgets();
  const loading = useBudgets.use.loading();
  const currentBudget = useBudgets.use.currentBudget();
  // const updateBudget = useBudgets.use.updateCurrentBudget();
  const createNewBudget = useBudgets.use.createNewBudget();

  useEffect(() => {
    useBudgets.getState().fetchBudgets();
  }, []);

  // const budgetCardsMock = useMemo<BudgetCardProps[]>(
  //   () => [
  //     {
  //       id: "budget-1",
  //       label: "Courses alimentaires",
  //       color: "#10b981",
  //       currentAmount: 156.75,
  //       limitAmount: 200,
  //       categories: [
  //         { id: "cat-1", label: "Fruits/Légumes", currentAmount: 45.2, limitAmount: 60 },
  //         { id: "cat-2", label: "Viandes", currentAmount: 89.3, limitAmount: 100 },
  //         { id: "cat-3", label: "Boissons", currentAmount: 22.25, limitAmount: 40 },
  //       ],
  //       onEdit: (id) => console.log("Edit", id),
  //       onDelete: (id) => console.log("Delete", id),
  //       onEditBudget: (id) => console.log("Edit budget", id),
  //     },
  //     {
  //       id: "budget-2",
  //       label: "Loisirs",
  //       color: "#3b82f6",
  //       currentAmount: 275.5,
  //       limitAmount: 250, // Dépassé
  //       categories: [
  //         { id: "cat-4", label: "Sorties resto", currentAmount: 120.75, limitAmount: 100 },
  //         { id: "cat-5", label: "Cinéma", currentAmount: 89.8, limitAmount: 80 },
  //         { id: "cat-6", label: "Jeux vidéo", currentAmount: 64.95, limitAmount: 70 },
  //       ],
  //     },
  //     {
  //       id: "budget-3",
  //       label: "Transport",
  //       color: "#f59e0b",
  //       currentAmount: 0,
  //       limitAmount: 150,
  //       categories: [], // Vide pour tester
  //     },
  //     {
  //       id: "budget-4",
  //       label: "Achat Maison",
  //       color: "#ff444e",
  //       currentAmount: 600_000,
  //       limitAmount: 500000,
  //       categories: [{ id: "cat-6", label: "Maison", currentAmount: 600_000, limitAmount: 500_000 }],
  //     },
  //   ],
  //   [],
  // );

  // En haut du fichier

  const filteredBudgets = useMemo(() => {
    // if (budgets.length > 0) return [];

    const transformed = budgets.map(transformBudget);

    if (!searchValue.trim()) return transformed;

    return transformed.filter((b) => b.label.toLowerCase().includes(searchValue.toLowerCase()));
  }, [budgets, searchValue]);

  const handleChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  // Création d'un nouveau budget
  const handleSubmit = async (formData: BudgetFormData) => {
    console.log("formData formData:", formData);

    const newBudget = await createNewBudget(formData);
    if (newBudget) {
      console.log("Nouveau budget:", formData);
    }
    // Mock
    // const newBudgetMock: BudgetCardProps = {
    //   id: `budget-${Date.now()}`,
    //   currentAmount: 0,
    //   ...formData,
    //   onEditTransaction: (id) => console.log("Edit Transaction", id),
    //   onDelete: (id) => console.log("Delete", id),
    //   onEditBudget: (id) => console.log("Edit budget", id),
    // };
  };

  const handleDelete = (id: string) => {
    useBudgets.getState().deleteBudgetById(id);
  };

  const handleEditTransaction = () => {
    console.log("handleEditTransaction");
  };

  const handleEditBudget = (id: string) => {
    const budgetToEdit = budgets.find((b) => b.id === id) ?? null;
    useBudgets.getState().setCurrentBudget(budgetToEdit);
    setIsEditOpen(true);
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="animate-spin">
          <Spinner size={32} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl">
      <h1 className="text-neutral text-3xl font-bold">Budgets</h1>

      <div className="mt-8 flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:gap-y-0">
        <div className="sm:w-1/3">
          <InputField
            id="search-budget"
            label=""
            name="search-budget"
            placeholder="Rechercher..."
            value={searchValue}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <ModalBudget actionLabel="Ajouter un budget" title="Création d'un budget" onSubmit={handleSubmit} />
        </div>
      </div>
      {filteredBudgets.length === 0 ? (
        <div className="mt-4">Aucun budget à afficher pour le moment</div>
      ) : (
        <div className="mt-4 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {filteredBudgets.map((budget) => (
            <div key={budget.id} className="mx-auto w-full flex-1">
              <BudgetCard
                {...budget}
                onDelete={handleDelete}
                onEditTransaction={handleEditTransaction}
                onEditBudget={handleEditBudget}
              />
            </div>
          ))}
        </div>
      )}

      {isEditOpen && currentBudget && (
        <ModalBudget
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          title="Éditer budget"
          confirmLabel="Enregistrer"
          actionLabel="Éditer le budget"
          initialData={{
            label: currentBudget.label,
            color: currentBudget.color,
            limitAmount: 0,
            categories: [],
          }}
          onSubmit={async (data) => {
            await useBudgets.getState().updateCurrentBudget(currentBudget.id, data);
          }}
        />
      )}
    </div>
  );
}
