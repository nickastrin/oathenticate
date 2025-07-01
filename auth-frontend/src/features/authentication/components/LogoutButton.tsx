import clsx from "clsx";
import { useLogout } from "../hooks";

export function LogoutButton() {
  const { handleLogout } = useLogout();

  return (
    <button
      className={clsx(
        "group flex flex-col place-items-center w-20 gap-1",
        "px-3 py-1 bg-transparent hover:border-transparent",
      )}
      onClick={handleLogout}
    >
      <div
        className={clsx(
          "flex flex-col py-1",
          "rounded-full text-center w-full",
          "group-hover:bg-zinc-700",
        )}
      >
        <span className="material-symbols-rounded"> logout </span>
      </div>
      <span className="text-xs font-medium">Logout</span>
    </button>
  );
}
