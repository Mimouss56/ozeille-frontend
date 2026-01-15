import { Link } from "react-router";

import UnderConstructionImg from "../../../assets/under-construct.png";
import { PATHS } from "../../../shared/constants/path";

const UnderConstructionPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff,#e6e9ef)] px-8 text-center">
      <img
        src={UnderConstructionImg}
        alt="Illustration d'un portefeuille vide avec un virevoltant"
        className="animate-float mx-auto mb-10 w-full max-w-87.5 drop-shadow-[0_15px_25px_rgba(16,185,129,0.3)]"
      />

      {/* Titre en Vert Forêt, gras */}
      <h1 className="text-accent mb-4 text-4xl font-bold md:text-5xl">Travaux en cours</h1>

      {/* Sous-titre en Mulish, Gris Anthracite */}
      <p className="font-mulish text-neutral mb-10 text-lg leading-relaxed">
        Nous construisons quelque chose de grand pour vous aider à gérer votre budget sereinement.{" "}
        <br className="hidden md:inline" />
        Cette page sera bientôt disponible.
      </p>
      <Link
        to={PATHS.PUBLIC.HOME.PATH}
        className="inline-block rounded-full bg-[#2E9F76] px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#248c66]">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
};

export default UnderConstructionPage;
