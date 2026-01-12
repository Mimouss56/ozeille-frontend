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
        className="btn btn-ghost btn-circle btn-sm -mr-2"
      >
        <DotsThreeOutline size={28} weight="fill" className="text-neutral" />
      </div>

      <ul 
        tabIndex={0} 
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-200"
      >
        {actions.map((action, index) => (
          <li key={index}>
            <a 
              onClick={() => handleClick(action.onClick)}
              className={action.variant === "danger" ? "text-error hover:bg-error/10" : ""}
            >
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};