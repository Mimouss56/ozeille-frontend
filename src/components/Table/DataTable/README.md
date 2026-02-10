# DataTable - Guide d'utilisation

## Filtrage automatique des colonnes

Le composant `DataTable` supporte maintenant le filtrage automatique des colonnes via l'attribut `meta.enableFiltering`.

### Utilisation de base

#### FilterInput par défaut

Pour activer le filtrage avec un input texte (par défaut) :

```tsx
import { DataTable, type FilterableColumnDef } from "./components/Table/DataTable";

const columns: FilterableColumnDef<Transaction>[] = [
  {
    accessorKey: "label",
    header: "Libellé",
    meta: {
      enableFiltering: true,
      filterPlaceholder: "Rechercher un libellé...",
    },
  },
  {
    accessorKey: "amount",
    header: "Montant",
    meta: {
      enableFiltering: true,
    },
  },
];

<DataTable data={transactions} columns={columns} />;
```

#### FilterSelect avec options

Pour utiliser un select avec des options prédéfinies :

```tsx
const columns: FilterableColumnDef<Transaction>[] = [
  {
    accessorKey: "category",
    header: "Catégorie",
    meta: {
      enableFiltering: true,
      filterOptions: [
        { id: "1", label: "Alimentation" },
        { id: "2", label: "Transport" },
        { id: "3", label: "Loisirs" },
      ],
      filterEmptyLabel: "Toutes les catégories",
    },
  },
];
```

### Propriétés meta disponibles

| Propriété          | Type                  | Description                                              |
| ------------------ | --------------------- | -------------------------------------------------------- |
| `enableFiltering`  | `boolean`             | Active le filtrage pour cette colonne                   |
| `filterPlaceholder`| `string`              | Placeholder pour FilterInput (défaut: "Rechercher...")   |
| `filterOptions`    | `FilterSelectOption[]`| Options pour FilterSelect (si présent, remplace Input)   |
| `filterEmptyLabel` | `string`              | Label option vide FilterSelect (défaut: "Toutes")        |

### Exemple complet

```tsx
import type { FilterableColumnDef } from "./components/Table/DataTable/DataTable";
import type { Transaction } from "./api/transactions";

const columns: FilterableColumnDef<Transaction>[] = [
  {
    accessorKey: "dueAt",
    header: "Date",
    cell: ({ row }) => new Date(row.original.dueAt).toLocaleDateString(),
    // Pas de filtrage pour cette colonne
  },
  {
    accessorKey: "category",
    header: "Catégorie",
    meta: {
      enableFiltering: true,
      filterOptions: categories.map((cat) => ({
        id: cat.id,
        label: cat.label,
      })),
      filterEmptyLabel: "Toutes",
    },
  },
  {
    accessorKey: "amount",
    header: "Montant",
    meta: {
      enableFiltering: true,
      filterPlaceholder: "Montant...",
    },
  },
  {
    accessorKey: "label",
    header: "Libellé",
    meta: {
      enableFiltering: true,
      filterPlaceholder: "Rechercher...",
    },
  },
];

export const TransactionTable = () => {
  return <DataTable data={transactions} columns={columns} paginated pageSize={20} />;
};
```

### Notes importantes

- Le filtrage est **case-insensitive** (insensible à la casse)
- Les filtres utilisent une recherche par inclusion de texte
- Si `filterOptions` est fourni, `FilterSelect` est utilisé automatiquement
- Sinon, `FilterInput` est utilisé par défaut
- Les colonnes sans `enableFiltering: true` n'affichent pas de filtres
