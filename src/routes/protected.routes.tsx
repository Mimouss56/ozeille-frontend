import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  // Si l'utilisateur n'est pas authentifié, on le renvoie vers Login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
