import { Link, NavLink, Navigate, Outlet } from "react-router";

import { PATHS } from "../../shared/constants/path";

export function AppLayout() {
  const isAuthenticated = localStorage.getItem("token");

  //Je mock les initials de l'utilisateur
  const userInitials = "CT";

  if (!isAuthenticated) {
    return <Navigate to={PATHS.PUBLIC.LOGIN.PATH} replace />;
  }

  return (
    <div className="text-neutral flex min-h-screen flex-col bg-base-100">
      {/* Desktop */}
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col pt-6 shadow-sm shadow-black/10 md:flex">
          <Link to={PATHS.PUBLIC.HOME.PATH} className="font-montserrat mx-auto text-[32px] font-bold">
            O’Zeille
          </Link>

          <div className="mt-6 h-full">
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

            <div className="mt-auto pt-4 mb-6 border-t border-base-200/50">
              <Link 
                to={PATHS.PRIVATE.PROFILE.PATH} 
                className="flex justify-center w-full"
                title="Mon profil"
              >
                <div className="initials placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-14 h-14 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-md">
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
      </nav>
    </div>
  );
}
