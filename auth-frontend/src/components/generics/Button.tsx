import clsx from "clsx";
import { Spinner } from "./Spinner";

interface ButtonProps {
  label: string;
  isLoading?: boolean;
  onClick: () => Promise<unknown> | void;
}

export function Button({ label, isLoading = false, onClick }: ButtonProps) {
  return (
    <button
      className={clsx(
        "text-dark font-semibold text-2xl",
        "w-fit rounded-full py-4 px-10",
        "bg-primary hover:bg-primary-light",
        "md:py-4 md:text-xl text-center",
        "transition-all duration-300",
        "flex flex-center gap-2"
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : <span>{label}</span>}
    </button>
  );
}
