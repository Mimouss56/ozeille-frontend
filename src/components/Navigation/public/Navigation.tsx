import { Link, useLocation } from "react-router";

import logo from "../../../assets/logo_ozeille.jpg";
import { PATHS } from "../../../shared/constants/path";
import { useAuthStore } from "../../../store/auth.store";
import { Button } from "../../Button/Button";
import ToggleTheme from "../../ToggleTheme/ToggleTheme";

export const Navigation = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();
  const isHomePage = location.pathname === PATHS.PUBLIC.HOME.PATH;

  const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-base-100/80 border-neutral/20 fixed top-0 left-0 z-50 w-full border-b backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="focus-visible:ring-primary relative h-8 w-8 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            role="button"
            tabIndex={0}
            aria-label="O'Zeille Home - Scroll to top"
            onClick={scrollToTop}
            onKeyDown={scrollToTop}>
            <img src={logo} alt="" aria-hidden="true" className="h-full w-full rounded-full" />
            <span className="sr-only">O &apos Zeille Home - Remonter en haut de la page</span>
          </div>
          <Link to={PATHS.PUBLIC.HOME.PATH} className="text-neutral text-xl font-semibold tracking-tight">
            {PATHS.PUBLIC.HOME.LABEL}
          </Link>
        </div>
        {/* Navigation Links */}
        {isHomePage && (
          <div className="hidden items-center gap-8 md:flex">
            {Object.values(PATHS.HOME).map((route) => (
              <Link
                key={route.PATH}
                to={{
                  pathname: PATHS.PUBLIC.HOME.PATH,
                  hash: `#${route.PATH}`,
                }}
                onClick={handleScrollToSection(route.PATH)}
                className="text-neutral/80 hover:text-neutral text-sm font-normal transition-colors">
                {route.LABEL}
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          <ToggleTheme />
          {isAuthenticated ? (
            <>
              <Link
                to={PATHS.PRIVATE.TRANSACTIONS.PATH}
                className="text-neutral bg-accent/10 hover:bg-accent/50 rounded-lg px-4 py-2 text-sm font-normal transition-colors">
                Mon Espace
              </Link>
              <Button onClick={logout} style="plainDanger" size="md">
                Déconnexion
              </Button>
            </>
          ) : (
            <>
              {/* Auth Links */}
              <Link
                to={PATHS.PUBLIC.LOGIN.PATH}
                className="text-neutral hover:bg-neutral/20 rounded-lg px-4 py-2 text-sm font-normal transition-colors">
                {PATHS.PUBLIC.LOGIN.LABEL}
              </Link>
              <Link
                to={PATHS.PUBLIC.REGISTER.PATH}
                className="text-neutral hover:bg-neutral/20 rounded-lg px-4 py-2 text-sm font-normal transition-colors">
                {PATHS.PUBLIC.REGISTER.LABEL}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
