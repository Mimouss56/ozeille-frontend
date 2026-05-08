import { ArrowsClockwiseIcon, BellIcon, ChartBarIcon, DeviceMobileIcon, TagIcon } from "@phosphor-icons/react";

// On stocke les classes Tailwind complètes pour éviter les soucis de PurgeCSS
const features = [
  {
    icon: ChartBarIcon,
    title: "Analyse détaillée",
    description: "Visualisez vos dépenses et revenus avec des graphiques clairs et intuitifs",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: BellIcon,
    title: "Alertes intelligentes",
    description: "Recevez des notifications personnalisées pour rester maître de votre budget",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  // {
  //   icon: TargetIcon,
  //   title: "Objectifs d'épargne",
  //   description: "Définissez et suivez vos objectifs financiers avec facilité",
  //   iconColor: "text-purple-500",
  //   iconBg: "bg-purple-500/10",
  // },
  {
    icon: ArrowsClockwiseIcon,
    title: "Transactions récurrentes",
    description: "Automatisez le suivi de vos dépenses et revenus réguliers",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: TagIcon,
    title: "Catégories personnalisées",
    description: "Organisez vos transactions selon vos propres catégories",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-500/10",
  },
  {
    icon: DeviceMobileIcon,
    title: "Multi-plateforme",
    description: "Accédez à vos finances depuis n'importe quel appareil",
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
  },
];

export const Features = () => {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-neutral mb-4 text-4xl font-semibold tracking-tight">Tout ce dont vous avez besoin</h2>
          <p className="text-neutral/80 text-lg">Des outils puissants pour une gestion financière simplifiée</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="border-base-200 bg-base-100 hover:bg-base-200/50 rounded-2xl border p-8 transition-colors">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${feature.iconBg}`}>
                  <Icon className={`h-7 w-7 ${feature.iconColor}`} weight="duotone" />
                </div>
                <h3 className="text-neutral mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-neutral/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
