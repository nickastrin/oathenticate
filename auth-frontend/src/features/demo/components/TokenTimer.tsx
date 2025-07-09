import clsx from "clsx";
import { Duration } from "../types";
import { TokenCountdown } from "./TokenCountdown";
import { TokenInvalid } from "./TokenInvalid";

interface TokenTimerProps {
  duration: Duration;
  isTimerRunning?: boolean;
  onRefresh: () => Promise<void>;
}

export function TokenTimer({
  duration,
  isTimerRunning = true,
  onRefresh,
}: TokenTimerProps) {
  return (
    <>
      {isTimerRunning ? (
        <TokenCountdown duration={duration} />
      ) : (
        <TokenInvalid />
      )}

      <button
        className={clsx(
          "text-dark font-semibold text-2xl",
          "w-fit rounded-full py-6 px-10",
          "bg-primary hover:bg-primary-light",
          "md:py-4 md:text-xl text-center",
          "transition-all duration-300",
          "flex flex-center gap-2"
        )}
        onClick={onRefresh}
      >
        <span>Refresh</span>
      </button>
    </>
  );
}
