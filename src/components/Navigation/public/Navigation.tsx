import { Link } from "react-router";

import logo from "../../../assets/logo_ozeille.jpg";
import { PATHS } from "../../../shared/constants/path";
import { Button } from "../../Button/Button";
import ToggleTheme from "../../ToggleTheme/ToggleTheme";
import { useNavigation } from "./useNavigation";

export const Navigation = () => {
  const { handleScrollToSection, isHomePage, isAuthenticated, logout } = useNavigation();

  const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      // On est sur la page d'acceuil ? si oui on scroll vers le haut (hero)
      handleScrollToSection("hero")(e);
    }
  };

  return (
    <nav className="bg-base-100/80 border-neutral/20 fixed top-0 left-0 z-50 w-full border-b backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to={PATHS.PUBLIC.HOME.PATH}
          onClick={onLogoClick}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Retour à l'accueil">
          <div className="relative h-8 w-8">
            <img src={logo} alt="O'Zeille Logo" className="h-full w-full rounded-full" />
          </div>
          <span className="text-neutral text-xl font-semibold tracking-tight">{PATHS.PUBLIC.HOME.LABEL}</span>
        </Link>

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
