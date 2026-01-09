import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { AppLayout } from "./components/SidePanel/AppLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { privateRoutes } from "./routes/private.routes";

export default function App() {
  const isAuth = false;

  return (
    <BrowserRouter>
      <Routes>
        {/* --- 1. PAGES SANS LAYOUT (Landing, Login, etc.) --- */}
        {isAuth ? (
          <Route element={<ProtectedRoutes isAuthenticated={isAuth} />}>
            {/* {privateRoutes.map((route) => (
              <Route
                key={route.to}
                path={route.to}
                element={<AppLayout navItems={privateRoutes}>{route.component}</AppLayout>}
              />
            ))} */}
          </Route>
        ) : (
          <Route path="/" element={<HomePage />} />
        )}

        {/* --- 2. PAGE DE TEST PUBLIQUE (Avec Layout) --- */}
        <Route
          path="/test-public"
          element={
            <AppLayout navItems={privateRoutes}>
              <div>Page de test publique avec Sidebar</div>
            </AppLayout>
          }
        />

        {/* --- 3. ROUTES PRIVÉES (Protégées + Layout) --- */}
        {/* <Route element={<ProtectedRoutes isAuthenticated={isAuth} />}>
          {privateRoutes.map((route) => (
            <Route
              key={route.to}
              path={route.to}
              element={<AppLayout navItems={privateRoutes}>{route.component}</AppLayout>}
            />
          ))}
        </Route> */}

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
