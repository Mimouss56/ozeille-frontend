import { NavLink } from "react-router";

import type { NavItem } from "../../routes/useRoutes";

interface AppLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
}

export function AppLayout({ children, navItems }: Readonly<AppLayoutProps>) {
  return (
    <div className="text-neutral flex min-h-screen flex-col">
      {/* Desktop */}
      <div className="bg-base-100 flex flex-1">
        <aside className="hidden w-64 flex-col pt-6 shadow-sm shadow-black/10 md:flex">
          <span className="font-montserrat mx-auto text-[32px] font-bold">O’Zeille</span>

          <div className="mt-6 h-full">
            <nav className="flex flex-col gap-2 px-3" aria-label="Navigation principale" role="navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `btn btn-sm justify-start gap-2 py-7 ${isActive ? "btn-success text-neutral" : "btn-ghost"}`
                  }>
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>

      {/* Mobile*/}
      <nav
        className="bg-base-100 fixed inset-x-0 bottom-0 flex justify-around border-t py-2 md:hidden"
        aria-label="Navigation mobile"
        role="navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className="flex flex-col items-center gap-1 text-xs">
            {({ isActive }) => (
              <>
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>

                {isActive && <span className="bg-success h-1 w-8 rounded-full" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
