import { Logo } from "@/components/generics/generics";
import { LoginForm } from "@/features/authentication/components/LoginForm";
import code from "@/assets/auth/code.svg";
import laptopRobot from "@/assets/auth/laptop-robot.svg";
import clsx from "clsx";

export function Login() {
  return (
    <div className="grid place-items-center">
      <div
        className={clsx(
          "flex flex-row p-3 gap-4",
          "3xl:gap-8 3xl:w-[1000px] 3xl:h-[760px]",
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

        <div className="hidden lg:flex relative h-full">
          <div className="gap-4 flex flex-col justify-center m-2 3xl:m-0">
            <img src={code} alt="Code" className="z-20 w-11/12 3xl:w-full" />
            <img src={laptopRobot} alt="Laptop Robot" className="z-20 w-5/6" />
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
