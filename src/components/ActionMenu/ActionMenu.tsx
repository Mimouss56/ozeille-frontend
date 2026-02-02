import { DotsThreeOutlineIcon, type Icon } from "@phosphor-icons/react";
import React from "react";

import { Button } from "../Button/Button";

export type MenuAction = {
  label: string;
  onClick?: () => void;
  icon?: Icon;
  style?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "dangerOutline" | "ghostOutline";
  render?: React.ReactNode | null;
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
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
          }
        }}>
        <DotsThreeOutlineIcon size={26} weight="fill" className="text-neutral" />
      </div>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box border-base-200 z-1 w-52 border p-2 shadow">
        {actions.map((action, index) => (
          <li key={index}>
            {action.render ? (
              action.render
            ) : (
              // eslint-disable-next-line prettier/prettier
              <Button
                size="md"
                onClick={() => handleClick(action.onClick!)}
                style={action.style}
                icon={action.icon}
              >
                {action.label}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
