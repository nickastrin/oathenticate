import { Logo } from "@/components/generics/generics";
import { LoginForm } from "@/features/authentication/components/LoginForm";
import code from "@/assets/auth/code.svg";
import laptopRobot from "@/assets/auth/laptop-robot.svg";
import clsx from "clsx";

export function Login() {
  return (
    <div className="m-auto grid place-items-center md:h-full">
      <div
        className={clsx(
          "flex flex-row p-3 gap-4 w-fit max-w-3xl",
          "border-2 border-neutral-dark rounded-xl",
        )}
      >
        <div className="basis-5/12 p-4">
          <div className="text-xs">
            <Logo />
          </div>
          <div className="pt-14 pb-4 h-full">
            <LoginForm />
          </div>
        </div>

        <div className="hidden lg:block relative grow">
          <div className="flex flex-col relative justify-center gap-6 h-full z-20">
            <img
              src={code}
              alt="Code"
              className="w-full h-auto object-contain"
            />
            <img
              src={laptopRobot}
              alt="Laptop Robot"
              className="w-full h-auto object-contain"
            />
          </div>

          <div
            className={clsx(
              "bg-primary rounded-xl",
              "absolute bottom-0 right-0 h-full w-5/6",
            )}
          />
        </div>
      </div>
    </div>
  );
}
