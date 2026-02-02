import { Navigate } from "react-router";
import { toast } from "react-toastify";

import { PATHS } from "../shared/constants/path";
import { useAuthStore } from "../store/auth.store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    toast.info("Vous devez être connecté pour accéder à cette page.");
    return <Navigate to={PATHS.PUBLIC.LOGIN.PATH} replace />;
  }
  return <>{children}</>;
};
