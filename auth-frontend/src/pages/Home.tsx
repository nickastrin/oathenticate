import { useNavigate } from "react-router";
import svg from "@/assets/robot.svg";
import clsx from "clsx";
import { Button } from "@/components";

export function Home() {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        "flex-row flex gap-16 p-6 max-w-4xl 3xl:max-w-6xl w-full",
        "lg:inset-0 place-items-center m-auto justify-center",
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-6",
          "max-w-xs sm:max-w-md 3xl:max-w-2xl",
        )}
      >
        <h1
          className={clsx(
            "font-extrabold text-white leading-tight",
            "text-5xl sm:text-7xl 3xl:text-8xl",
          )}
        >
          <span>Let us take care of your security</span>
          <span className="text-primary-light"> .</span>
        </h1>
        <h2
          className={clsx(
            "font-montserrat tracking-tighter text-neutral mb-12",
            "text-xl md:text-2xl 3xl:text-3xl 3xl:!leading-[60px]",
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

      <div
        className={clsx(
          "group relative hidden lg:block place-items-center",
          "w-1/2 3xl:w-2/3 aspect-square",
        )}
      >
        <img src={svg as string} className="z-20 w-full" alt={"Robot"} />

        <div
          className={clsx(
            "transition-all duration-300",
            "w-full aspect-square rounded-full",
            "absolute -z-10 top-[10%] left-1/2 -translate-x-1/2",
            "group-hover:shadow-2xl group-hover:shadow-primary-light",
            "bg-primary group-hover:bg-primary-light",
          )}
        />
      </div>

      <div className="block lg:hidden">
        <div
          className={clsx(
            "fixed bottom-[-10%] right-0 w-52",
            "aspect-square bg-primary-light/10 rounded-full blur-3xl",
          )}
        />
        <div
          className={clsx(
            "fixed bottom-[20%] right-[-10%] w-40",
            "aspect-square bg-accent/10 rounded-full blur-3xl",
          )}
        />
      </div>
    </div>
  );
}
