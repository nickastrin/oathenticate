import clsx from "clsx";
import { useLogout } from "../hooks";

export function ExpandedLogoutButton() {
  const { handleLogout } = useLogout();

  return (
    <button
      className={clsx(
        "group flex flex-col place-items-center gap-1 w-52",
        "p-1 bg-transparent hover:border-transparent",
      )}
      onClick={handleLogout}
    >
      <div
        className={clsx(
          "flex flex-row py-2 px-3 gap-3",
          "rounded-full place-items-center w-full",
          "group-hover:bg-muted",
        )}
      >
        <span className="material-symbols-rounded">logout</span>
        <span className="text-sm font-medium">Logout</span>
      </div>
    </button>
  );
}
