import { ArrowRight } from "phosphor-react";

export const CTA = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-semibold tracking-tight">Prêt à maîtriser vos finances ?</h2>
        <p className="mb-8 text-xl text-gray-600">
          Rejoignez des milliers d'utilisateurs qui ont repris le contrôle de leur budget
        </p>
        <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 text-base font-normal text-white transition-colors hover:bg-emerald-700">
          Commencer gratuitement
          <ArrowRight className="h-5 w-5" />
        </button>
        <p className="mt-4 text-sm text-gray-500">Aucune carte bancaire requise · Essai gratuit de 30 jours</p>
      </div>
    </section>
  );
};
