import { Logo } from "@/components/generics/generics";
import { useState } from "react";
import { ExpandedSidebar } from "./ExpandedSidebar";
import clsx from "clsx";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "flex flex-row place-items-center",
          "w-full py-4 px-6 bg-darker gap-2",
        )}
      >
        <button
          className="p-0 bg-transparent flex place-items-center"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <span className="material-symbols-rounded"> menu </span>
        </button>

        <Logo />
      </div>

      <ExpandedSidebar
        show={showSidebar}
        onClose={() => setShowSidebar(false)}
        withBackdrop
      />
    </>
  );
}
