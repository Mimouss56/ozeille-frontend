import { Link, Navigate, Outlet, useNavigate } from "react-router";

import { PATHS } from "../shared/constants/path";

export const PrivateLayout = () => {
  const isAuthenticated = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to={PATHS.PUBLIC.LOGIN.PATH} replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(PATHS.PUBLIC.LOGIN.PATH);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <nav
        style={{
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>O'zeille</div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to={PATHS.PRIVATE.DASHBOARD.PATH} style={{ fontWeight: 500, color: "#000" }}>
            Dashboard
          </Link>
          <Link to={PATHS.PRIVATE.BUDGETS.PATH} style={{ fontWeight: 500, color: "#000" }}>
            Budgets
          </Link>
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
          }}>
          Déconnexion
        </button>
      </nav>

      <main style={{ flex: 1, padding: "30px" }}>
        <Outlet />
      </main>
    </div>
  );
};
