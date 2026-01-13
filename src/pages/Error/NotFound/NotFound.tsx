import { Link } from "react-router";

import notFoundImg from "../../../assets/not-found.png";
import { PATHS } from "../../../shared/constants/path";

export function PageNotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff,#e6e9ef)] px-8 text-center">
      {/* Formes abstraites en arrière-plan (full Tailwind) */}
      <div className="absolute top-[10%] left-[5%] h-30 w-30 -rotate-12 rounded-3xl bg-white/30 shadow-[0_10px_20px_rgba(0,0,0,0.05)] backdrop-blur-sm" />
      <div className="absolute top-[20%] left-[15%] h-37.5 w-37.5 -rotate-12 rounded-3xl bg-white/30 opacity-50 backdrop-blur-sm" />
      <div className="absolute bottom-[25%] left-[20%] h-20 w-20 -rotate-12 rounded-3xl bg-white/30 backdrop-blur-sm" />
      <div className="absolute right-[5%] bottom-[10%] h-25 w-25 -rotate-12 rounded-3xl bg-white/30 backdrop-blur-sm" />
      <div className="absolute right-[15%] bottom-[30%] h-32.5 w-32.5 -rotate-12 rounded-3xl bg-white/30 opacity-60 backdrop-blur-sm" />

      {/* Particules lumineuses (full Tailwind) */}
      <div
        className="absolute top-[40%] left-[50%] h-5 w-5 animate-bounce rounded-full bg-yellow-400/70"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-[45%] left-[45%] h-8 w-8 animate-bounce rounded-full bg-yellow-400/70"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[35%] left-[55%] h-6 w-6 animate-bounce rounded-full bg-yellow-400/70"
        style={{ animationDelay: "2s" }}
      />

      <main className="w-screen">
        {/* Image du portefeuille */}
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

        {/* Bouton CTA */}
        <Link
          to={PATHS.PUBLIC.HOME.PATH}
          className="inline-block rounded-full bg-[#2E9F76] px-6 py-3 font-bold text-white shadow-[0_4px_6px_rgba(46,159,118,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#248c66]">
          Retour à l&apos;accueil
        </Link>
      </main>
    </div>
  );
}
