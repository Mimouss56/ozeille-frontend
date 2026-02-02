import { cva } from "class-variance-authority";
import { CloudCheckIcon, LockIcon, ShieldCheckIcon } from "@phosphor-icons/react";

const securityCardStyles = cva("rounded-xl border p-6 text-center transition-shadow", {
  variants: {
    variant: {
      default: "border-gray-200 hover:shadow-md",
    },
  },
});

const securityFeatures = [
  {
    icon: ShieldCheckIcon,
    title: "Chiffrement de bout en bout",
    description: "Toutes vos données sont cryptées avec les standards bancaires les plus élevés",
  },
  {
    icon: LockIcon,
    title: "Authentification à deux facteurs",
    description: "Protégez votre compte avec une couche de sécurité supplémentaire",
  },
  {
    icon: CloudCheckIcon,
    title: "Sauvegarde automatique",
    description: "Vos données sont sauvegardées en temps réel sur des serveurs sécurisés",
  },
];

export const Security = () => {
  return (
    <section id="security" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-semibold tracking-tight">Vos données en toute sécurité</h2>
            <p className="mb-8 text-lg text-gray-600">
              La protection de vos informations financières est notre priorité absolue. Nous utilisons les technologies
              les plus avancées pour garantir votre tranquillité d&apos;esprit.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className={securityCardStyles()}>
              <div className="mx-auto mb-8 h-32 w-32">
                <div className="relative h-full w-full">
                  <ShieldCheckIcon className="h-full w-full text-emerald-600" weight="duotone" />
                  <div className="absolute inset-0 rounded-full bg-emerald-600 opacity-10 blur-xl"></div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="mb-2 text-xl font-semibold text-emerald-900">Certification bancaire</h3>
                <p className="text-emerald-800">Conforme aux normes PCI DSS et RGPD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
