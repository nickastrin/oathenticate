import { Logo } from "@/components/generics/generics";
import clsx from "clsx";

export function Navbar() {
  return (
    <div
      className={clsx(
        "flex flex-row place-items-center",
        "w-full py-4 px-6 bg-darker gap-2"
      )}
    >
      <button className="p-0 bg-transparent flex place-items-center">
        <span className="material-symbols-rounded"> menu </span>
      </button>

      <Logo />
    </div>
  );
}
