import { Link, Navigate, Outlet } from "react-router";

import { MainMenu } from "../../components/Navigation/private/mainMenu";
import { MobileMenu } from "../../components/Navigation/private/mobileMenu";
import { PATHS } from "../../shared/constants/path";

export function PrivateLayout() {
  const isAuthenticated = localStorage.getItem("token");

  //Je mock les initials de l'utilisateur
  const userInitials = "CT";

  if (!isAuthenticated) {
    return <Navigate to={PATHS.PUBLIC.LOGIN.PATH} replace />;
  }

  return (
    <div className="text-neutral bg-base-100 flex min-h-screen flex-col">
      {/* Desktop */}
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col pt-6 shadow-sm shadow-black/10 md:flex">
          <Link to={PATHS.PUBLIC.HOME.PATH} className="font-montserrat mx-auto text-[32px] font-bold">
            O’Zeille
          </Link>

          <div className="mt-6 h-full">
            <MainMenu />
            <div className="border-base-200/50 mt-auto mb-6 border-t pt-4">
              <Link to={PATHS.PRIVATE.PROFILE.PATH} className="flex w-full justify-center" title="Mon profil">
                <div className="initials placeholder">
                  <div className="bg-neutral text-neutral-content flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-md transition-transform hover:scale-105">
                    <span className="text-lg font-normal">{userInitials}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile*/}
      <MobileMenu />
    </div>
  );
}
