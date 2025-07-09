import clsx from "clsx";

interface TimerBackgroundProps {
  isTimerRunning: boolean;
}

export function TimerBackground({
  isTimerRunning = true,
}: TimerBackgroundProps) {
  return (
    <div
      className={clsx(
        "transform -translate-x-1/2 -translate-y-1/2",
        "size-96 rounded-full border-dotted border-8",
        "absolute top-1/2 left-1/2 -z-20 shadow-2xl animate-pulse",
        {
          "border-primary shadow-primary": isTimerRunning,
          "border-neutral shadow-accent": !isTimerRunning,
        }
      )}
    />
  );
}
