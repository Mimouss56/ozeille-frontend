import { useLocation } from "react-router";

import { PATHS } from "../../../shared/constants/path";
import { useAuthStore } from "../../../store/auth.store";

export const useNavigation = () => {
  const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();
  const isHomePage = location.pathname === PATHS.PUBLIC.HOME.PATH;

  return {
    handleScrollToSection,
    isHomePage,
    isAuthenticated,
    logout,
  };
};
