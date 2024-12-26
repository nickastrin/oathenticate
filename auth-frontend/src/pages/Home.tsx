import { NavLink } from "react-router-dom";
import svg from "@/assets/robot.svg";
import clsx from "clsx";

export function Home() {
  return (
    <div className="relative size-full">
      <div className="flex-row flex gap-16 absolute md:px-4 inset-0 justify-center top-[15%]">
        <div className="flex flex-col max-w-lg gap-16 md:gap-20">
          <div className="grid gap-6">
            <div className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              <span>Let us take care of your security</span>
              <span className="text-primary-light"> .</span>
            </div>

            <div className="font-montserrat text-wrap text-2xl text-neutral">
              <span>Add</span>
              <span className="font-bold text-accent"> unbreakable </span>
              <span>security to your app. </span>
              <span>The safety of your users is one click away.</span>
            </div>
          </div>

          <NavLink
            to="/login"
            className={clsx(
              "text-dark font-semibold text-2xl",
              "w-fit rounded-full py-6 px-10",
              "bg-primary hover:bg-primary-light",
              "md:py-4 md:text-xl text-center"
            )}
          >
            Get started
          </NavLink>
        </div>

        <div className="group relative hidden lg:block place-items-center">
          <img src={svg as string} className="z-20 w-2/3" alt={"Robot"} />
          <div
            className={clsx(
              "transition-all duration-300",
              "bg-primary w-2/3 aspect-square rounded-full",
              "absolute -z-10 top-[10%] left-1/2 -translate-x-1/2",
              "group-hover:shadow-2xl group-hover:shadow-primary-light"
            )}
          />
        </div>
      </div>
    </div>
  );
}
