import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface NavigationButtonProps {
  path: string;
  icon: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavigationButton({
  path,
  icon,
  label,
  onClick,
}: NavigationButtonProps) {
  return (
    <NavLink
      to={path}
      className={clsx(
        "group flex flex-col place-items-center w-20 gap-1",
        "px-3 py-1 bg-transparent hover:border-transparent"
      )}
      onClick={(e) => onClick?.(e)}
    >
      {({ isActive }) => (
        <>
          <div
            className={clsx(
              "flex flex-col py-1",
              "rounded-full text-center w-full",
              { "bg-primary-dark": isActive },
              { "group-hover:bg-zinc-700": !isActive }
            )}
          >
            <span
              className={clsx("material-symbols-rounded", {
                "text-primary-light": isActive,
              })}
            >
              {icon}
            </span>
          </div>
          <span className="text-xs font-medium">{label}</span>
        </>
      )}
    </NavLink>
  );
}
