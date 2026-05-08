import { CheckIcon } from "@phosphor-icons/react";

import { Button } from "../../../components/Button/Button";

const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    period: "/mois",
    features: ["Jusqu'à 50 transactions/mois", "3 catégories personnalisées", "Statistiques de base"],
    buttonText: "Commencer",
    buttonStyle: "outline" as const,
    popular: false,
    cardStyle: "bg-base-100 border-base-300",
  },
  {
    name: "Pro",
    price: "4,99 €",
    period: "/mois",
    features: ["Transactions illimitées", "Catégories illimitées", "Analyses avancées", "Export des données"],
    buttonText: "Essayer 30 jours",
    buttonStyle: "primary" as const,
    popular: true,
    cardStyle: "bg-base-200 border-primary shadow-xl scale-105 z-10",
  },
  {
    name: "Premium",
    price: "9,99 €",
    period: "/mois",
    features: ["Tout du plan Pro", "Support prioritaire", "Conseiller financier IA", "API pour développeurs"],
    buttonText: "Commencer",
    buttonStyle: "outline" as const,
    popular: false,
    cardStyle: "bg-base-100 border-base-300",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-neutral mb-4 text-4xl font-semibold tracking-tight">Un tarif simple et transparent</h2>
          <p className="text-neutral/80 text-lg">Choisissez la formule qui vous convient</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-xl border p-8 transition-all ${plan.cardStyle}`}>
              {plan.popular && (
                <div className="bg-primary text-primary-content absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium">
                  Populaire
                </div>
              )}
              <h3 className="text-neutral mb-2 text-xl font-semibold">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-neutral text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-neutral/60 ml-1">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon
                      className={`h-5 w-5 shrink-0 ${plan.popular ? "text-primary" : "text-neutral/60"}`}
                      weight="bold"
                    />
                    <span className="text-neutral/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Utilisation de TON composant Button */}
              <div className="mx-auto mt-auto pt-4">
                <Button style={plan.buttonStyle}>{plan.buttonText}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
