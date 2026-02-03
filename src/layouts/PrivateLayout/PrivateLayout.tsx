import { Outlet } from "react-router";

import { AsideMenu } from "../../components/Navigation/private/AsideMenu";
import { MobileNav } from "../../components/Navigation/private/MobileNav";
import { useSessionExpired } from "../../hooks/useSessionExpired";

export function PrivateLayout() {
  // Écoute l'événement de session expirée pour rediriger vers login
  useSessionExpired();

  return (
    <div className="text-neutral bg-base-100 min-h-screen">
      <AsideMenu />
      <main className="min-h-screen overflow-y-auto p-4 pb-20 md:ml-64 md:p-8 md:pb-8">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
}
