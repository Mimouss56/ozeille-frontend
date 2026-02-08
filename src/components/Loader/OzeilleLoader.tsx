import { cva } from "class-variance-authority";

interface OzeilleSplashLoaderProps {
  text?: string;
  subtext?: string;
  fullscreen?: boolean;
}

const containerStyles = cva("flex flex-col items-center justify-center bg-base-100 transition-all duration-500", {
  variants: {
    fullscreen: {
      true: "fixed inset-0 z-50 h-screen w-screen",
      false: "h-full w-full py-10",
    },
  },
  defaultVariants: {
    fullscreen: false,
  },
});

export const OzeilleLoader = ({ text, subtext, fullscreen = false }: OzeilleSplashLoaderProps) => {
  return (
    <div className={containerStyles({ fullscreen })}>
      {/* SVG ANIMÉ */}
      <div className="relative h-48 w-48">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          {/* Définition des Gradients */}
          <defs>
            <linearGradient id="gradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradientSuccess" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-success)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-success)" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* CERCLE 1 (Extérieur) - Lent */}
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="url(#gradientPrimary)"
            strokeWidth="4"
            strokeLinecap="round"
            className="origin-center animate-[spin_3s_linear_infinite]"
            strokeDasharray="300"
            strokeDashoffset="100"
          />

          {/* CERCLE 2 (Milieu) - Moyen, sens inverse */}
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="url(#gradientSuccess)"
            strokeWidth="4"
            strokeLinecap="round"
            className="origin-center animate-[spin_2s_linear_infinite_reverse] opacity-80"
            strokeDasharray="200"
            strokeDashoffset="80"
          />

          {/* CERCLE 3 (Intérieur) - Rapide */}
          <circle
            cx="100"
            cy="100"
            r="40"
            stroke="var(--color-warning)"
            strokeWidth="3"
            strokeLinecap="round"
            className="origin-center animate-[spin_1.5s_ease-in-out_infinite] opacity-60"
            strokeDasharray="100"
            strokeDashoffset="120"
          />

          {/* NOYAU CENTRAL (Pulsation) */}
          <circle cx="100" cy="100" r="15" fill="var(--color-neutral)" className="animate-pulse opacity-20" />
          <circle cx="100" cy="100" r="8" fill="var(--color-neutral)" className="animate-bounce" />
        </svg>

        {/* Effet de lueur derrière */}
        <div className="bg-primary/5 absolute inset-0 -z-10 animate-pulse rounded-full blur-3xl" />
      </div>

      {/* TEXTES AVEC APPARITION EN DOUCEUR */}
      <div className="mt-8 flex flex-col items-center gap-2 text-center">
        {text && <h2 className="text-neutral animate-pulse text-2xl font-bold tracking-tight">{text}</h2>}
        {subtext && <p className="text-neutral/50 text-sm font-medium">{subtext}</p>}
      </div>

      {/* Barre de chargement décorative en bas */}
      <div className="bg-base-200 mt-6 h-1 w-32 overflow-hidden rounded-full">
        <div className="from-primary via-success to-primary h-full w-full origin-left animate-[scale-x_1.5s_ease-in-out_infinite] bg-linear-to-r" />
      </div>
    </div>
  );
};
