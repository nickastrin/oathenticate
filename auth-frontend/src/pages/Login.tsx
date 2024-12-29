import { Logo } from "@/components/generics/generics";
import { LoginForm } from "@/features/authentication/components/LoginForm";
import clsx from "clsx";

import code from "@/assets/auth/code.svg";
import laptopRobot from "@/assets/auth/laptop-robot.svg";

export function Login() {
  return (
    <div className="grid place-items-center size-full">
      <div
        className={clsx(
          "flex flex-row p-3 gap-4",
          "border-2 border-neutral-dark rounded-xl"
        )}
      >
        <div className="basis-5/12 p-4">
          <div className="text-xs">
            <Logo />
          </div>

          <div className="pt-12 pb-4 h-full">
            <LoginForm />
          </div>
        </div>

        <div className="hidden lg:flex grow relative basis-7/12">
          <div className="m-2 gap-4 flex flex-col justify-center">
            <img src={code} alt="Code" className="z-20 w-11/12" />
            <img src={laptopRobot} alt="Laptop robot" className="z-20 w-5/6" />
          </div>

          <div
            className={clsx(
              "bg-primary rounded-xl",
              "absolute bottom-0 right-0 h-full w-5/6"
            )}
          />
        </div>
      </div>
    </div>
  );
}
