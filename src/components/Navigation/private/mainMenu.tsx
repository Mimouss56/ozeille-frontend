import { NavLink } from "react-router";

import { PATHS } from "../../../shared/constants/path";

export function MainMenu() {
  return (
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
  );
}
