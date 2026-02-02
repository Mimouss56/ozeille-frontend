import { NavLink } from "react-router";

import { PATHS } from "../../../shared/constants/path";

export const MobileNav = () => {
  return (
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
  );
};
