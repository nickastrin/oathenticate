import clsx from "clsx";

type SpinnerSize = "sm" | "md" | "lg" | "xl";
type SpinnerColor = "dark" | "light" | "primary" | "accent";

interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
}

const sizeResolver = {
  sm: "w-4 h-4",
  md: "w-7 h-7",
  lg: "w-9 h-9",
  xl: "w-11 h-11",
} as const;

const colorResolver = {
  dark: "text-dark",
  light: "text-neutral-light",
  primary: "text-primary",
  accent: "text-accent",
} as const;

export function Spinner({ size = "md", color = "dark" }: SpinnerProps) {
  return (
    <svg
      className={clsx("animate-spin", sizeResolver[size], colorResolver[color])}
      role="status"
      aria-label="Loading"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-45"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
