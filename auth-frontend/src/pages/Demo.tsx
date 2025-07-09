import { Spinner } from "@/components";
import { TimerBackground, TokenTimer } from "@/features/demo/components";
import { useDemoData } from "@/features/demo/hooks";
import clsx from "clsx";
import { useMemo } from "react";

export function Demo() {
  const { isLoading, tokenDuration, refreshAccessToken } = useDemoData();

  const isTimerRunning = useMemo(
    () => tokenDuration.minutes > 0 || tokenDuration.seconds > 0,
    [tokenDuration]
  );

  return (
    <div
      className={clsx(
        "flex flex-col p-6 w-full gap-8 max-w-4xl",
        "justify-center place-items-center m-auto relative"
      )}
    >
      <TimerBackground isTimerRunning={isTimerRunning} />

      {isLoading ? (
        <Spinner color="primary" size="lg" />
      ) : (
        <TokenTimer
          duration={tokenDuration}
          isTimerRunning={isTimerRunning}
          onRefresh={refreshAccessToken}
        />
      )}
    </div>
  );
}
