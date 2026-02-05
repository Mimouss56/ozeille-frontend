import { ArrowRightIcon } from "@phosphor-icons/react";
import { cva } from "class-variance-authority";

const ctaButtonStyles = cva(
  "inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-normal transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-emerald-600 text-white hover:bg-emerald-700",
        secondary: "border border-gray-300 text-gray-900 hover:bg-gray-50",
      },
    },
  },
);

export const Cta = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-semibold tracking-tight">Prêt à maîtriser vos finances ?</h2>
        <p className="text-neutral/80 mb-8 text-xl">
          Rejoignez des milliers d&apos;utilisateurs qui ont repris le contrôle de leur budget
        </p>
        <button className={ctaButtonStyles({ variant: "primary" })}>
          Commencer gratuitement
          <ArrowRightIcon className="h-5 w-5" />
        </button>
        <p className="text-neutral/25 mt-4 text-sm">Aucune carte bancaire requise · Essai gratuit de 30 jours</p>
      </div>
    </section>
  );
};
