import { Link, NavLink } from "react-router";

import logo from "../../assets/logo_ozeille.jpg";
import { homeRoutes } from "../../routes/home.routes";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-screen border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <img src={logo} alt="O'Zeille Logo" className="h-full w-full rounded-full" />
          </div>
          <Link to="/" className="text-xl font-semibold tracking-tight">
            O'Zeille
          </Link>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {homeRoutes.map((route) => (
            <NavLink
              key={route.to}
              to={{
                pathname: "/",
                hash: route.to,
              }}
              className="text-sm font-normal text-gray-600 transition-colors hover:text-gray-900">
              {route.label}
            </NavLink>
          ))}
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
          <Link to="/test-public" className="text-sm font-normal text-gray-600 transition-colors hover:text-gray-900">
            Test Public
          </Link>
        </div>
      </div>
    </nav>
  );
};
