import React from "react";

interface NavigationButtonProps {
  icon: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function NavigationButton({
  icon,
  label,
  onClick,
}: NavigationButtonProps) {
  return (
    <button
      className="group flex flex-col items-center gap-1 w-20 bg-transparent hover:border-transparent px-3 py-1"
      onClick={onClick}
    >
      <span className="w-full rounded-full material-symbols-rounded py-1 group-hover:bg-zinc-700">
        {icon}
      </span>
      <span className="text-xs font-medium"> {label}</span>
    </button>
  );
}
