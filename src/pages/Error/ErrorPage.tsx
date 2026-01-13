import { Link } from "react-router";

import { PATHS } from "../../shared/constants/path";

export function ErrorPage({ title, children, imgSrc }: { title: string; children: React.ReactNode; imgSrc: string }) {
  return (
    <div className="bg-gradient-radial relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden from-white to-[#e6e9ef] px-8 text-center">
      {/* Formes abstraites en arrière-plan */}
      <div className="absolute top-[10%] left-[5%] h-30 w-30 -rotate-30 rounded-3xl bg-gray-200/40 shadow-lg backdrop-blur-sm" />
      <div className="absolute top-[20%] left-[15%] h-37.5 w-37.5 -rotate-30 rounded-3xl bg-gray-200/40 opacity-50 backdrop-blur-sm" />
      <div className="absolute bottom-[25%] left-[20%] h-20 w-20 -rotate-30 rounded-3xl bg-gray-200/40 backdrop-blur-sm" />
      <div className="absolute right-[5%] bottom-[10%] h-25 w-25 -rotate-30 rounded-3xl bg-gray-200/40 backdrop-blur-sm" />
      <div className="absolute right-[15%] bottom-[30%] h-32.5 w-32.5 -rotate-30 rounded-3xl bg-gray-200/40 opacity-60 backdrop-blur-sm" />

      {/* Particules lumineuses */}
      <div
        className="bg-warning absolute top-[20%] left-[25%] h-5 w-5 animate-[float_6s_ease-in-out_infinite] rounded-full"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="bg-warning absolute top-[25%] left-[85%] h-8 w-8 animate-[float_6s_ease-in-out_infinite] rounded-full"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="bg-warning absolute top-[50%] left-[65%] h-6 w-6 animate-[float_6s_ease-in-out_infinite] rounded-full"
        style={{ animationDelay: "2s" }}
      />
      <main className="relative z-10 w-full">
        {/* Image du portefeuille */}
        <img
          src={imgSrc}
          alt="Portefeuille vide avec un virevoltant"
          className="mx-auto mb-8 block h-auto w-100 max-w-full animate-[float_8s_ease-in-out_infinite] drop-shadow-[0_10px_20px_rgba(46,159,118,0.3)] filter"
        />

        {/* Titre */}
        <h1 className="mb-2 text-4xl font-bold text-gray-800">{title}</h1>

        {/* Description */}
        <p className="mb-8 text-base text-gray-600">{children}</p>

        {/* Bouton CTA */}
        <Link
          to={PATHS.PUBLIC.HOME.PATH}
          className="inline-block rounded-full bg-[#2E9F76] px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#248c66]">
          Retour à l&apos;accueil
        </Link>
      </main>
    </div>
  );
}
