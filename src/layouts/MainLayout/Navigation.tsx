import { Link } from "react-router-dom";

import logo from "../../assets/logo_ozeille.jpg";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-screen border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <img src={logo} alt="O'Zeille Logo" className="h-full w-full rounded-full" />
          </div>
          <span className="text-xl font-semibold tracking-tight">O'Zeille</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-normal text-gray-600 transition-colors hover:text-gray-900">
            Fonctionnalités
          </a>
          <a href="#security" className="text-sm font-normal text-gray-600 transition-colors hover:text-gray-900">
            Sécurité
          </a>
          <a href="#pricing" className="text-sm font-normal text-gray-600 transition-colors hover:text-gray-900">
            Tarifs
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-normal text-gray-600 transition-colors hover:text-gray-900">
            Connexion
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-normal text-white transition-colors hover:bg-gray-800">
            Commencer
          </Link>
        </div>
      </div>
    </nav>
  );
};
