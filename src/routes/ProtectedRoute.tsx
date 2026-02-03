import { Navigate } from "react-router";

import { PATHS } from "../shared/constants/path";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const accessToken = sessionStorage.getItem("access_token");
  const refreshToken = sessionStorage.getItem("refresh_token");

  if (!accessToken && !refreshToken) {
    return <Navigate to={PATHS.PUBLIC.LOGIN.PATH} replace />;
  }
  return <>{children}</>;
};
