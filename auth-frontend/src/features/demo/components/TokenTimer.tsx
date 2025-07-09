import { Duration } from "../types";
import { TokenCountdown } from "./TokenCountdown";
import { Button } from "@/components";

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
        <div className="text-center">
          <p className="text-xl mb-2 text-neutral font-montserrat">
            Your token is <strong> valid </strong> for:
          </p>
          <TokenCountdown duration={duration} />
        </div>
      ) : (
        <div className="text-center">
          <p className="text-2xl mb-4 font-bold text-neutral font-montserrat">
            Your token is <span className="text-accent">invalid</span>
          </p>
          <p className="text-xl mb-8 text-neutral"> Please refresh it </p>
        </div>
      )}

      <Button label="Refresh" onClick={onRefresh} />
    </>
  );
}
