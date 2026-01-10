// Assure-toi d'avoir installé react-router-dom si tu utilises le Link
import { Link } from "react-router";

// L'image est hébergée, on l'utilise directement
const illustrationUrl = "https://i.imgur.com/y19806s.png";

const UnderConstructionPage = () => {
  return (
    // Conteneur principal : fond dégradé, centré, police Montserrat
    <div className="font-montserrat relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b from-white via-gray-50 to-gray-100 p-8 text-center">
      {/* Formes d'arrière-plan floues (Glassmorphism vibes) */}
      <div className="bg-primary/10 absolute top-[-10%] left-[-5%] -z-10 h-75 w-75 rounded-full blur-[60px]"></div>
      <div className="bg-accent/10 absolute right-[-10%] bottom-[-15%] -z-10 h-100 w-100 rounded-full blur-[60px]"></div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-2xl">
        {/* Illustration avec animation de flottement et ombre portée */}
        <img
          src={illustrationUrl}
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

        {/* Bouton Pilule en Vert O'Zeille avec effets au survol */}
        <Link
          to="/"
          className="bg-primary hover:bg-primary-focus inline-block rounded-full px-10 py-4 text-base font-semibold text-white shadow-[0_4px_15px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(16,185,129,0.5)]">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
