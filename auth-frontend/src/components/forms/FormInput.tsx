import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import "./style.css";

interface FormInputProps {
  name: string;
  icon?: string;
  placeholder: string;
}

export function FormInput({ name, icon, placeholder }: FormInputProps) {
  const { register } = useFormContext();

  return (
    <div
      className={clsx(
        "form-input text-neutral bg-dark w-full",
        "flex flex-row place-items-center gap-3 p-3",
        "rounded-xl border-2 border-neutral-dark"
      )}
    >
      <span className="material-symbols-rounded">{icon}</span>
      <input
        {...register(name)}
        className={clsx(
          "appearance-none focus:outline-none grow",
          "bg-transparent placeholder:text-neutral-dark pe-1"
        )}
        placeholder={placeholder}
      />
    </div>
  );
}
