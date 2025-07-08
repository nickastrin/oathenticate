import { useDemoData } from "@/features/demo/hooks";
import clsx from "clsx";

export function Demo() {
  const { isLoading, refreshAccessToken } = useDemoData();

  return (
    <div
      className={clsx(
        "flex flex-col p-6 w-full gap-8 max-w-4xl",
        "justify-center place-items-center m-auto relative",
      )}
    >
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          "size-96 rounded-full border-dotted -z-20 border-8 border-primary",
        )}
      ></div>

      <h1 className="text-center">
        <p className="text-2xl mb-2 text-neutral"> Your token is valid for: </p>
        <strong className="text-7xl text-neutral-light"> 29m 08s </strong>
      </h1>
      <button
        className={clsx(
          "text-dark font-semibold text-2xl",
          "w-fit rounded-full py-6 px-10",
          "bg-primary hover:bg-primary-light",
          "md:py-4 md:text-xl text-center",
          "transition-all duration-300",
          "flex flex-center gap-2",
        )}
        onClick={refreshAccessToken}
      >
        <span>Refresh</span>
      </button>
    </div>
  );
}
