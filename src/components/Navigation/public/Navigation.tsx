import { Link, useLocation } from "react-router";

import logo from "../../../assets/logo_ozeille.jpg";
import { PATHS } from "../../../shared/constants/path";

export const Navigation = () => {
  const location = useLocation();

  const isHomePage = location.pathname === PATHS.PUBLIC.HOME.PATH;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <img src={logo} alt="O'Zeille Logo" className="h-full w-full rounded-full" />
          </div>
          <Link to={PATHS.PUBLIC.HOME.PATH} className="text-xl font-semibold tracking-tight">
            {PATHS.PUBLIC.HOME.LABEL}
          </Link>
        </div>

        {/* Navigation Links */}
        {isHomePage && (
          <div className="hidden items-center gap-8 md:flex">
            {Object.values(PATHS.HOME).map((route) => (
              <Link
                key={route.PATH}
                to={route.PATH}
                className="text-sm font-normal text-gray-600 transition-colors hover:text-gray-900">
                {route.LABEL}
              </Link>
            ))}
          </div>
        )}

        {/* Auth Links */}
        <div className="flex items-center gap-3">
          <Link
            to={PATHS.PUBLIC.LOGIN.PATH}
            className="text-sm font-normal text-gray-600 transition-colors hover:text-gray-900">
            {PATHS.PUBLIC.LOGIN.LABEL}
          </Link>
          <Link
            to={PATHS.PUBLIC.REGISTER.PATH}
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-normal text-white transition-colors hover:bg-gray-800">
            {PATHS.PUBLIC.REGISTER.LABEL}
          </Link>
        </div>
      </div>
    </nav>
  );
};
