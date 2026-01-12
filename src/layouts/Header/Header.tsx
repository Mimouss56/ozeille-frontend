import React from "react";
import { Link } from "react-router";
import { Button } from "../../components/Button/Button";
import logo from "../../assets/logo_ozeille.jpg";

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <img src={logo} alt="O'Zeille Logo" className="h-full w-full object-cover" />
            </div>
            <Link to="/" className="text-xl font-semibold tracking-tight text-gray-900">
              O'Zeille
            </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Connexion
          </Link>
          <Link to="/signup">
             <Button size="sm" style="primary">
                Inscription
             </Button>
          </Link>
        </div>
        
      </div>
    </nav>
  );
};