import clsx from "clsx";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import "./style.css";

interface FormPasswordInputProps {
  name: string;
  icon?: string;
  placeholder: string;
}

export function FormPasswordInput({
  name,
  icon,
  placeholder,
}: FormPasswordInputProps) {
  const { register } = useFormContext();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

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
        type={isPasswordHidden ? "password" : "text"}
        className={clsx(
          "appearance-none focus:outline-none grow",
          "bg-transparent placeholder:text-neutral-dark pe-1"
        )}
        placeholder={placeholder}
      />

      <button
        className="p-0 bg-transparent flex"
        onClick={() => setIsPasswordHidden(!isPasswordHidden)}
      >
        <span className="material-symbols-rounded">
          {isPasswordHidden ? "visibility" : "visibility_off"}
        </span>
      </button>
    </div>
  );
}
