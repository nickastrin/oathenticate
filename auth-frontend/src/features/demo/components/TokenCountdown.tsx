import { Duration } from "../types";
import { splitLastDigit } from "../utils";

interface TokenCountdownProps {
  duration: Duration;
}

export function TokenCountdown({ duration }: TokenCountdownProps) {
  const parseSeconds = (seconds: number) => {
    const { remainingDigits, lastDigit } = splitLastDigit(seconds);

    return (
      <>
        {remainingDigits && <span>{remainingDigits}</span>}
        <span className="text-primary">{lastDigit}</span>
        <span>s</span>
      </>
    );
  };

  const parseMinutes = (minutes: number) => {
    const shouldRenderMinutes = minutes > 0;
    if (!shouldRenderMinutes) {
      return null;
    }

    return (
      <>
        <span className="text-primary">{minutes}</span>
        <span>m</span>
      </>
    );
  };

  return (
    <h1 className="text-7xl text-neutral-light font-bold">
      {parseMinutes(duration.minutes)} {parseSeconds(duration.seconds)}
    </h1>
  );
}
