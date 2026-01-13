import { cva } from "class-variance-authority";
import { ArrowsClockwise, Bell, ChartBar, DeviceMobile, Tag, Target } from "phosphor-react";

type ColorVariant = "emerald" | "blue" | "purple" | "orange" | "pink" | "cyan";
const features: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: ColorVariant;
}[] = [
    {
      icon: ChartBar,
      title: "Analyse détaillée",
      description: "Visualisez vos dépenses et revenus avec des graphiques clairs et intuitifs",
      color: "emerald",
    },
    {
      icon: Bell,
      title: "Alertes intelligentes",
      description: "Recevez des notifications personnalisées pour rester maître de votre budget",
      color: "blue",
    },
    {
      icon: Target,
      title: "Objectifs d'épargne",
      description: "Définissez et suivez vos objectifs financiers avec facilité",
      color: "purple",
    },
    {
      icon: ArrowsClockwise,
      title: "Transactions récurrentes",
      description: "Automatisez le suivi de vos dépenses et revenus réguliers",
      color: "orange",
    },
    {
      icon: Tag,
      title: "Catégories personnalisées",
      description: "Organisez vos transactions selon vos propres catégories",
      color: "pink",
    },
    {
      icon: DeviceMobile,
      title: "Multi-plateforme",
      description: "Accédez à vos finances depuis n'importe quel appareil",
      color: "cyan",
    },
  ];

const featureCardStyles = cva("rounded-xl border border-gray-200 bg-white p-8", {
  variants: {
    color: {
      emerald: "bg-emerald-100 text-emerald-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      cyan: "bg-cyan-100 text-cyan-600",
    },
  },
});

export const Features = () => {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight">Tout ce dont vous avez besoin</h2>
          <p className="text-lg text-gray-600">Des outils puissants pour une gestion financière simplifiée</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className={featureCardStyles({ color: feature.color })}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
