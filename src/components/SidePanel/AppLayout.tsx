import { HouseIcon, PiggyBankIcon } from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

const navItems  = [
  { to: "/dashboard", label: "Dashboard", icon: <HouseIcon size={24} /> },
  { to: "/budgets", label: "Budgets", icon: <PiggyBankIcon size={24} /> },
];
export function AppLayout({ children }: AppLayoutProps) {
  
  return (
    <div className="min-h-screen flex flex-col text-neutral ">
      {/* Desktop */}
      <div className="flex-1 flex bg-base-100">
        <aside className="hidden md:flex w-64 flex-col pt-6 shadow-sm shadow-black/10">
          <span className="mx-auto font-montserrat font-bold text-[32px]">
            O’Zeille
          </span>

          <div className=" mt-6 h-full">
            <nav className="mt-6 flex flex-col gap-2 px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `btn btn-sm justify-start gap-2 py-7 ${
                      isActive ? "btn-success text-neutral" : "btn-ghost"
                    }`
                  }
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>

      {/* Mobile*/}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-base-100 border-t flex justify-around py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex flex-col items-center gap-1 text-xs"
          >
            {({ isActive }) => (
              <>
                <span>{item.icon}</span>
                <span>{item.label}</span>

                {isActive && (
                  <span className="h-1 w-8 rounded-full bg-success" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

    </div>
  );
}
