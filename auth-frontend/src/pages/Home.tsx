import { useNavigate } from "react-router";
import svg from "@/assets/robot.svg";
import clsx from "clsx";
import { Button } from "@/components";

export function Home() {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        "absolute md:top-[15%] justify-center",
        "flex-row flex gap-16 p-6 lg:inset-0 lg:place-items-center"
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-6",
          "max-w-xs sm:max-w-md 3xl:max-w-2xl"
        )}
      >
        <h1
          className={clsx(
            "font-extrabold text-white leading-tight",
            "text-[48px] md:text-7xl 3xl:text-[96px]"
          )}
        >
          <span>Let us take care of your security</span>
          <span className="text-primary-light"> .</span>
        </h1>
        <h2
          className={clsx(
            "font-montserrat tracking-tighter text-neutral mb-12",
            "text-[24px] md:text-2xl 3xl:text-[40px] 3xl:!leading-[60px]"
          )}
        >
          <span>Add</span>
          <span className="font-bold text-accent"> unbreakable </span>
          <span>security to your app. </span>
          <span>The safety of your users is one click away.</span>
        </h2>

        <Button
          label="Get Started"
          onClick={() => {
            navigate("/login");
          }}
        />
      </div>

      <div className="group relative hidden lg:block place-items-center">
        <img
          src={svg as string}
          className="z-20 w-2/3 3xl:w-full"
          alt={"Robot"}
        />
        <div
          className={clsx(
            "transition-all duration-300",
            "w-2/3 3xl:w-full aspect-square rounded-full",
            "absolute -z-10 top-[10%] left-1/2 -translate-x-1/2",
            "group-hover:shadow-2xl group-hover:shadow-primary-light",
            "bg-primary group-hover:bg-primary-light"
          )}
        />
      </div>
    </div>
  );
}
