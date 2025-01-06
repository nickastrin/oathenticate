import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface ExpandedNavigationButtonProps {
  path: string;
  icon: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function ExpandedNavigationButton({
  path,
  icon,
  label,
  onClick = () => {},
}: ExpandedNavigationButtonProps) {
  return (
    <NavLink
      to={path}
      className={clsx(
        "group flex flex-col place-items-center gap-1 w-52",
        "p-1 bg-transparent hover:border-transparent",
      )}
      onClick={onClick}
    >
      {({ isActive }) => (
        <>
          <div
            className={clsx(
              "flex flex-row py-2 px-3 gap-3",
              "rounded-full place-items-center w-full",
              { "bg-primary-dark": isActive },
              { "group-hover:bg-zinc-700": !isActive },
            )}
          >
            <span
              className={clsx("material-symbols-rounded", {
                "text-primary-light": isActive,
              })}
            >
              {icon}
            </span>
            <span
              className={clsx("text-sm font-medium", {
                "text-primary-light": isActive,
              })}
            >
              {label}
            </span>
          </div>
        </>
      )}
    </NavLink>
  );
}
