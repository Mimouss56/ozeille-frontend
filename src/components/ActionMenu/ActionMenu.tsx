import { DotsThreeOutline } from "phosphor-react";
import React from "react";

export type MenuAction = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "danger";
};

type ActionMenuProps = {
  actions: MenuAction[];
};

export const ActionMenu: React.FC<ActionMenuProps> = ({ actions }) => {
  const handleClick = (action: () => void) => {
    action();
    const e = document.activeElement as HTMLElement;
    if (e) {
      e.blur();
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        aria-label="Menu d'options"
        aria-haspopup="menu"
        aria-expanded={false}
        className="hover:bg-neutral/20 focus:ring-neutral flex h-fit w-fit items-center justify-center rounded-md focus:ring-2 focus:outline-none"
        onClick={() => {}}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
          }
        }}>
        <DotsThreeOutline size={26} weight="fill" className="text-neutral" />
      </div>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box border-base-200 z-1 w-52 border p-2 shadow">
        {actions.map((action, index) => (
          <li key={index}>
            <button
              onClick={() => handleClick(action.onClick)}
              className={
                action.variant === "danger"
                  ? "text-error hover:bg-error/10 focus:bg-error/10"
                  : "focus:bg-bg-neutral/20 text-neutral"
              }>
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
