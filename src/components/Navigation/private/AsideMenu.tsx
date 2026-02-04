import { SignOutIcon } from "@phosphor-icons/react";
import { Link, NavLink, useNavigate } from "react-router";

import { PATHS } from "../../../shared/constants/path";
import { useAuthStore } from "../../../store/auth.store";
import { Button } from "../../Button/Button";
import ToggleTheme from "../../ToggleTheme/ToggleTheme";

export const AsideMenu = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const userInitials = user ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase() : "CT";
  const handleLogout = () => {
    logout();
    navigate(PATHS.PUBLIC.LOGIN.PATH);
  };

  return (
    <aside className="fixed top-0 left-0 hidden h-screen w-64 flex-col pt-6 shadow-sm shadow-black/10 md:flex">
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
        <div className="border-base-200 mx-auto mt-auto mb-6 flex flex-col gap-6 border-t pt-4">
          <Link to={PATHS.PRIVATE.PROFILE.PATH} className="flex w-full justify-center" title="Mon profil">
            <div className="initials placeholder">
              <div className="bg-neutral text-neutral-content flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-md transition-transform hover:scale-105">
                <span className="text-md font-normal">{userInitials}</span>
              </div>
            </div>
          </Link>
          <ToggleTheme />
          <div className="flex w-full justify-center">
            <Button onClick={handleLogout} style="danger" size="md" icon={SignOutIcon}>
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
