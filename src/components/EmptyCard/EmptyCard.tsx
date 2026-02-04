import { type Icon } from "@phosphor-icons/react";

interface PropsEmptyCard {
  icon: Icon;
  label: string;
  subtitle?: string;
}

export const EmptyCard = ({ icon, label, subtitle }: PropsEmptyCard) => {
  const IconComponent = icon;
  return (
    <div className="bg-base-100 border-base-300 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-6 text-center">
      <div className="bg-success/10 text-success rounded-full p-3">
        <IconComponent size={32} weight="duotone" />
      </div>
      <div>
        <h3 className="text-neutral text-sm font-semibold">{label}</h3>
        {subtitle && <p className="text-neutral/50 text-xs">{subtitle}</p>}
      </div>
    </div>
  );
};
