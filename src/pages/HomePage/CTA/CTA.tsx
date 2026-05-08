import { ArrowRightIcon } from "@phosphor-icons/react";

import { Button } from "../../../components/Button/Button";

export const Cta = () => {
  return (
    <section className="mb-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="bg-primary/10 mx-auto max-w-4xl rounded-3xl p-10 text-center lg:p-16">
        <h2 className="text-neutral mb-6 text-4xl font-semibold tracking-tight">Prêt à maîtriser vos finances ?</h2>
        {/* <p className="text-neutral/80 mx-auto mb-8 max-w-2xl text-xl">
          Rejoignez des milliers d&apos;utilisateurs qui ont repris le contrôle de leur budget
        </p> */}

        {/* Utilisation de TON composant Button */}
        <Button size="lg" style="primary">
          Commencer gratuitement
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>

        <p className="text-neutral/50 mt-4 text-sm">Aucune carte bancaire requise · Essai gratuit de 30 jours</p>
      </div>
    </section>
  );
};
