import { Link, NavLink, Navigate, Outlet } from "react-router";

import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";
import { SignOut } from "phosphor-react";
import { Button } from "../../components/Button/Button";

export function PrivateLayout() {
  const isAuthenticated = sessionStorage.getItem("access_token");
  const { user, logout } = useAuthStore();

  const userInitials = user ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase() : "CT";

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

          <div className="mt-6 flex flex-1 flex-col px-3">
            <nav className="flex flex-col gap-2 px-3" aria-label="Navigation principale" role="navigation">
              {Object.values(PATHS.PRIVATE)
                .filter((path) => !path.HIDE_IN_MENU)
                .map((item) => {
                  const Icon = item.ICON;
                  return (
                    <NavLink
                      key={item.PATH}
                      to={item.PATH}
                      className={({ isActive }) =>
                        `btn btn-sm justify-start gap-2 py-7 ${isActive ? "btn-success text-neutral" : "btn-ghost"}`
                      }>
                      <span aria-hidden="true">
                        <Icon size={24} />
                      </span>
                      <span>{item.LABEL}</span>
                    </NavLink>
                  );
                })}
            </nav>
            <div className="mt-auto mb-6 flex flex-col gap-6 pt-4 border-base-200 border-t mx-auto">
              <Link to={PATHS.PRIVATE.PROFILE.PATH} className="flex w-full justify-center" title="Mon profil">
                <div className="initials placeholder">
                  <div className="bg-neutral text-neutral-content flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-md transition-transform hover:scale-105">
                    <span className="text-md font-normal">{userInitials}</span>
                  </div>
                </div>
              </Link>
              <div className="flex justify-center w-full">
                <Button 
                    onClick={logout} 
                    style="danger" 
                    size="md" 
                    icon={SignOut}
                >
                    Déconnexion
                </Button>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile*/}
      <nav
        className="bg-base-100 fixed inset-x-0 bottom-0 flex justify-around border-t py-2 md:hidden"
        aria-label="Navigation mobile"
        role="navigation">
        {Object.values(PATHS.PRIVATE)
          .filter((path) => !path.HIDE_IN_MENU)
          .map((item) => {
            const Icon = item.ICON;
            return (
              <NavLink key={item.PATH} to={item.PATH} className="flex flex-col items-center gap-1 text-xs">
                {({ isActive }) => (
                  <>
                    <span aria-hidden="true">
                      <Icon size={24} />
                    </span>
                    <span>{item.LABEL}</span>

                    {isActive && <span className="bg-success h-1 w-8 rounded-full" />}
                  </>
                )}
              </NavLink>
            );
          })}

          <NavLink to={PATHS.PRIVATE.PROFILE.PATH} className="flex flex-col items-center gap-1 text-xs">
            {({ isActive }) => (
              <>
                <span aria-hidden="true">
                  <PATHS.PRIVATE.PROFILE.ICON size={24} />
                </span>
                <span>{PATHS.PRIVATE.PROFILE.LABEL}</span>
                {isActive && <span className="bg-success h-1 w-8 rounded-full" />}
              </>
            )}
        </NavLink>
      </nav>
    </div>
  );
}
