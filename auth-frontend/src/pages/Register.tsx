import { Logo } from "@/components";
import shelfRobot from "@/assets/auth/shelf-robot.svg";
import shelfComputer from "@/assets/auth/shelf-computer.svg";
import { RegisterForm } from "@/features/authentication/components";
import clsx from "clsx";
import { useNavigate } from "react-router";
import { useAuthenticationContext } from "@/features/authentication/contexts";
import { useEffect } from "react";

export function Register() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthenticationContext();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className={clsx("m-auto grid place-items-center", "w-fit md:h-full")}>
      <div
        className={clsx(
          "flex flex-row p-3 gap-4 w-full md:w-fit max-w-3xl",
          "border-2 border-neutral-dark rounded-xl",
        )}
      >
        <div className="hidden lg:block relative grow min-w-96">
          <div
            className={clsx(
              "flex flex-col relative h-full z-20",
              "place-items-end justify-center gap-6",
            )}
          >
            <img
              src={shelfRobot}
              alt="Code"
              className="w-3/4 h-auto object-contain"
            />
            <img
              src={shelfComputer}
              alt="Laptop Robot"
              className="w-full p-2 h-auto object-contain"
            />
          </div>

          <div
            className={clsx(
              "bg-primary rounded-xl",
              "absolute bottom-0 left-0 h-full w-11/12",
            )}
          />
        </div>

        <div className="basis-5/12 p-4">
          <div className="text-xs justify-self-end">
            <Logo />
          </div>

          <div className="pt-12 pb-4 h-full">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
