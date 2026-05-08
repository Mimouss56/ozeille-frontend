import { CloudCheckIcon, LockIcon, ShieldCheckIcon } from "@phosphor-icons/react";

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
          {/* Colonne de gauche : Textes et Liste */}
          <div>
            <h2 className="text-neutral mb-6 text-4xl font-semibold tracking-tight">Vos données en toute sécurité</h2>
            <p className="text-neutral/80 mb-10 text-lg leading-relaxed">
              La protection de vos informations financières est notre priorité absolue. Nous utilisons les technologies
              les plus avancées pour garantir votre tranquillité d&apos;esprit.
            </p>

            <div className="space-y-8">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                      <Icon className="h-6 w-6 text-emerald-500" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-neutral mb-1 text-lg font-semibold">{feature.title}</h3>
                      <p className="text-neutral/70">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne de droite : Carte visuelle */}
          <div className="relative mt-8 lg:mt-0 lg:ml-8">
            <div className="border-base-200 bg-base-100 rounded-2xl border p-10 text-center shadow-lg transition-shadow hover:shadow-xl">
              <div className="mx-auto mb-8 h-32 w-32">
                <div className="relative flex h-full w-full items-center justify-center">
                  {/* Icône principale */}
                  <ShieldCheckIcon className="relative z-10 h-24 w-24 text-emerald-500" weight="duotone" />
                  {/* Effet de lueur (Glow) en arrière plan */}
                  <div className="absolute inset-0 z-0 rounded-full bg-emerald-500 opacity-20 blur-2xl"></div>
                </div>
              </div>
              <div>
                <h3 className="text-neutral mb-3 text-2xl font-semibold">Certification bancaire</h3>
                <p className="text-neutral/70 font-medium">Conforme aux normes PCI DSS et RGPD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
