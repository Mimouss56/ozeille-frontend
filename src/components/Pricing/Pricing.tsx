import { CheckIcon } from "@phosphor-icons/react";
import { cva } from "class-variance-authority";

const pricingButtonStyles = cva("rounded-lg px-6 py-3 font-normal transition-colors", {
  variants: {
    variant: {
      free: "border border-gray-300 text-neutral hover:bg-base-100/80",
      pro: "bg-base-100 text-neutral hover:bg-base-100/80",
    },
  },
});

const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    period: "/mois",
    features: ["Jusqu'à 50 transactions/mois", "3 catégories personnalisées", "Statistiques de base"],
    buttonText: "Commencer",
    buttonStyle: pricingButtonStyles({ variant: "free" }),
    popular: false,
  },
  {
    name: "Pro",
    price: "4,99 €",
    period: "/mois",
    features: ["Transactions illimitées", "Catégories illimitées", "Analyses avancées", "Export des données"],
    buttonText: "Essayer 30 jours",
    buttonStyle: pricingButtonStyles({ variant: "pro" }),
    popular: true,
    cardStyle: "bg-accent/80 text-white border-base-300",
  },
  {
    name: "Premium",
    price: "9,99 €",
    period: "/mois",
    features: ["Tout du plan Pro", "Support prioritaire", "Conseiller financier IA", "API pour développeurs"],
    buttonText: "Commencer",
    buttonStyle: pricingButtonStyles({ variant: "free" }),
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight">Un tarif simple et transparent</h2>
          <p className="text-neutral/80 text-lg">Choisissez la formule qui vous convient</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 ${plan.cardStyle || "bg-base-100 border-base-300"}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">
                  Populaire
                </div>
              )}
              <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className={plan.popular ? "text-gray-400" : "text-gray-600"}>{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon
                      className={`h-5 w-5 shrink-0 ${plan.popular ? "text-white" : "text-emerald-600"}`}
                      weight="bold"
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full ${plan.buttonStyle}`}>{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
