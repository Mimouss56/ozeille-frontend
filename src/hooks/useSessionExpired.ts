import { useEffect } from "react";
import { useNavigate } from "react-router";

import { PATHS } from "../shared/constants/path";
import { useAuthStore } from "../store/auth.store";
import { SESSION_EXPIRED_EVENT } from "../utils/axiosClient";

/**
 * Hook qui écoute l'événement de session expirée et redirige vers la page de login.
 * À utiliser dans un composant parent (ex: App ou Layout).
 */
export function useSessionExpired() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  useEffect(() => {
    const handleSessionExpired = () => {
      logout();
      navigate(PATHS.PUBLIC.LOGIN.PATH, { replace: true });
    };

    window.addEventListener(SESSION_EXPIRED_EVENT, handleSessionExpired);

    return () => {
      window.removeEventListener(SESSION_EXPIRED_EVENT, handleSessionExpired);
    };
  }, [navigate, logout]);
}
