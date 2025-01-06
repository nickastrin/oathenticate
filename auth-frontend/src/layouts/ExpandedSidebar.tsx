import { Logo } from "@/components/generics/generics";
import { ExpandedNavigationButton } from "@/components/navigation/ExpandedNavigationButton";
import clsx from "clsx";

interface ExpandedSidebarProps {
  show: boolean;
  onClose: () => void;
  withBackdrop?: boolean;
}

export function ExpandedSidebar({
  show,
  onClose,
  withBackdrop = false,
}: ExpandedSidebarProps) {
  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 z-30",
          "flex flex-row size-full pointer-events-none",
        )}
      >
        <div
          className={clsx(
            "py-6 px-2 bg-dark rounded-r-xl flex flex-col",
            "transition-all duration-800 ease-in-out pointer-events-auto",
            { "translate-x-[-100%]": !show },
            { "translate-x-0": show },
          )}
        >
          <div className="grid gap-1 mb-auto">
            <div
              className={clsx(
                "flex flex-row px-4 mb-8 text-sm",
                "justify-between place-items-center",
              )}
            >
              <Logo />
              <button className="p-0 bg-transparent" onClick={onClose}>
                <span className="material-symbols-rounded">
                  keyboard_tab_rtl
                </span>
              </button>
            </div>

            <ExpandedNavigationButton
              path="/"
              icon="home"
              label="Home"
              onClick={onClose}
            />
            <ExpandedNavigationButton
              path="/settings"
              icon="settings"
              label="Settings"
              onClick={onClose}
            />
            <ExpandedNavigationButton
              path="/about"
              icon="groups"
              label="About"
              onClick={onClose}
            />
          </div>

          <ExpandedNavigationButton
            path="login"
            icon="login"
            label="Login"
            onClick={onClose}
          />
        </div>

        {withBackdrop && show && (
          <div
            className="size-full backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
          />
        )}
      </div>
    </>
  );
}
