import { type Icon } from "@phosphor-icons/react";
import { type VariantProps, cva } from "class-variance-authority";

// 1. Définition des statuts (cohérence avec BudgetCard)
export const EmptyCardStatus = {
  Neutral: "neutral",
  Success: "success",
  Warning: "warning",
  Error: "error",
} as const;

export type EmptyCardStatus = (typeof EmptyCardStatus)[keyof typeof EmptyCardStatus];

// 2. Définition du style du conteneur avec CVA
const emptyCardStyle = cva(
  // Base : Flex center, padding, arrondi, bordure pointillée
  "bg-base-100 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-6 text-center transition-colors",
  {
    variants: {
      status: {
        [EmptyCardStatus.Neutral]: "border-base-300",
        [EmptyCardStatus.Success]: "border-success",
        [EmptyCardStatus.Warning]: "border-warning",
        [EmptyCardStatus.Error]: "border-error",
      },
    },
    defaultVariants: {
      status: EmptyCardStatus.Neutral,
    },
  },
);

// 3. Mapping des couleurs pour l'icône selon le statut
const iconColorStyles: Record<EmptyCardStatus, string> = {
  [EmptyCardStatus.Neutral]: "bg-base-content/5 text-base-content/70", // Gris subtil
  [EmptyCardStatus.Success]: "bg-success/10 text-success",
  [EmptyCardStatus.Warning]: "bg-warning/10 text-warning",
  [EmptyCardStatus.Error]: "bg-error/10 text-error",
};

export type EmptyCardVariants = VariantProps<typeof emptyCardStyle>;

interface PropsEmptyCard extends EmptyCardVariants {
  icon: Icon;
  label: string;
  subtitle?: string;
}

export const EmptyCard = ({ icon, label, subtitle, status }: PropsEmptyCard) => {
  const IconComponent = icon;

  // Par défaut, on utilise le statut fourni ou Neutral
  const computedStatus = status || EmptyCardStatus.Neutral;

  return (
    <div className={emptyCardStyle({ status: computedStatus })}>
      {/* Cercle de l'icône avec couleur dynamique */}
      <div className={`rounded-full p-3 ${iconColorStyles[computedStatus]}`}>
        <IconComponent size={32} weight="duotone" />
      </div>

      <div>
        <h3 className="text-neutral text-sm font-semibold">{label}</h3>
        {subtitle && <p className="text-neutral/50 text-xs">{subtitle}</p>}
      </div>
    </div>
  );
};
