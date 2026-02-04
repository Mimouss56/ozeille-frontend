import { ArrowRightIcon, PiggyBankIcon, TrendUpIcon, WalletIcon } from "@phosphor-icons/react";
import { cva } from "class-variance-authority";

const heroButtonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-normal transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-emerald-600 text-white hover:bg-emerald-700",
        secondary: "border border-gray-300 text-neutral bg-base-100 hover:bg-black/10",
      },
    },
  },
);

export const Hero = () => {
  return (
    <section className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            Maîtrisez vos finances en toute sérénité
          </h1>
          <p className="text-neutral/80 mb-8 text-xl font-normal">
            Une application moderne pour suivre, analyser et optimiser votre budget au quotidien. Simple, élégante et
            conçue pour vous.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className={heroButtonStyles({ variant: "primary" })}>
              Essayer gratuitement
              <ArrowRightIcon className="h-4 w-4" />
            </button>
            <button className={heroButtonStyles({ variant: "secondary" })}>Voir la démo</button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative mt-16">
          <div className="bg-base-200/50 border-base-200 relative rounded-2xl border p-8 shadow-xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Balance Card */}
              <div className="border-base-200 bg-base-100 rounded-xl border p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-neutral/80 text-sm">Solde actuel</span>
                  <WalletIcon className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="mb-1 text-3xl font-semibold tracking-tight">2 847 €</div>
                <div className="flex items-center gap-1 text-sm text-emerald-600">
                  <TrendUpIcon className="h-4 w-4" />
                  <span>+12.5% ce mois</span>
                </div>
              </div>

              {/* Expenses Card */}
              <div className="border-base-200 bg-base-100 rounded-xl border p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-neutral/80 text-sm">Dépenses</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <span className="text-sm text-red-600">€</span>
                  </div>
                </div>
                <div className="mb-1 text-3xl font-semibold tracking-tight">1 243 €</div>
                <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                  <div className="h-2 w-2/3 rounded-full bg-red-500"></div>
                </div>
              </div>

              {/* Savings Card */}
              <div className="border-base-200 bg-base-100 rounded-xl border p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-neutral/80 text-sm">Épargne</span>
                  <PiggyBankIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div className="mb-1 text-3xl font-semibold tracking-tight">8 430 €</div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span>Objectif: 10 000 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
