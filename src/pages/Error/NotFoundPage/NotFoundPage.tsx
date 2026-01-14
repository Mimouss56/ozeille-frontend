import { Link } from "react-router";

import notFoundImg from "../../../assets/not-found.png";
import { PATHS } from "../../../shared/constants/path";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff,#e6e9ef)] px-8 text-center">
      <img
        src={notFoundImg}
        alt="Portefeuille vide avec un virevoltant"
        className="mx-auto mb-8 block h-auto w-full max-w-100 filter-[drop-shadow(0_10px_20px_rgba(46,159,118,0.3))]"
      />

      {/* Titre */}
      <h1 className="mb-2 text-4xl font-bold text-gray-800">Oups, ce portefeuille est vide.</h1>

      {/* Description */}
      <p className="mb-8 text-base text-gray-600">
        La page que vous cherchez semble avoir disparu. Retournez en lieu sûr.
      </p>
      <Link
        to={PATHS.PUBLIC.HOME.PATH}
        className="inline-block rounded-full bg-[#2E9F76] px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#248c66]">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
