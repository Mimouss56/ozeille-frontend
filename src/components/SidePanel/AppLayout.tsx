import { HouseIcon, PiggyBankIcon } from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: <HouseIcon size={24} /> },
  { to: "/budgets", label: "Budgets", icon: <PiggyBankIcon size={24} /> },
];
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="text-neutral flex min-h-screen flex-col">
      {/* Desktop */}
      <div className="bg-base-100 flex flex-1">
        <aside className="hidden w-64 flex-col pt-6 shadow-sm shadow-black/10 md:flex">
          <span className="font-montserrat mx-auto text-[32px] font-bold">O’Zeille</span>

          <div className="mt-6 h-full">
            <nav className="mt-6 flex flex-col gap-2 px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `btn btn-sm justify-start gap-2 py-7 ${isActive ? "btn-success text-neutral" : "btn-ghost"}`
                  }>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>

      {/* Mobile*/}
      <nav className="bg-base-100 fixed inset-x-0 bottom-0 flex justify-around border-t py-2 md:hidden">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className="flex flex-col items-center gap-1 text-xs">
            {({ isActive }) => (
              <>
                <span>{item.icon}</span>
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
