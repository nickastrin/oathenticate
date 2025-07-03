import clsx from "clsx";
import github from "@/assets/social/github-dark.png";
import linkedIn from "@/assets/social/linkedin-dark.png";
import cvImage from "@/assets/social/cv.jpg";
import { NavLink } from "react-router";

export function About() {
  return (
    <div
      className={clsx(
        "flex flex-col p-6 w-full gap-12 max-w-4xl",
        "justify-center place-items-center m-auto",
      )}
    >
      <div
        className={clsx(
          "flex flex-col lg:flex-row gap-12 m-auto",
          "justify-center place-items-center",
        )}
      >
        <div
          className={clsx(
            "border-2 border-primary h-72 w-72 lg:h-64 lg:w-64 rounded-xl",
            "hover:shadow-2xl hover:shadow-primary-light",
            "transition-all duration-300 overflow-hidden",
          )}
        >
          <img
            src={cvImage}
            alt="Nikolaos Astrinakis"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 text-center lg:text-start">
          <h2 className="font-bold leading-tight text-2xl 3xl:text-4xl text-neutral mb-4">
            About me
          </h2>

          <h1 className="font-extrabold text-4xl lg:text-5xl">
            Nikolaos Astrinakis
          </h1>
          <p className="text-primary font-montserrat text-2xl lg:text-3xl mb-2">
            Software Engineer
          </p>

          <p className="font-montserrat text-neutral text-sm leading-loose max-w-xl">
            Software engineer with expertise in multiple ecosystems.
            Demonstrated success in delivering scalable applications and
            optimizing system performance. Strong academic background in
            Computer Engineering with focus on{" "}
            <strong className="text-accent"> Algorithms </strong> and
            <strong className="text-accent"> Data Engineering </strong>.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 place-items-center lg:place-items-start">
        <h2 className="font-bold leading-tight text-2xl 3xl:text-4xl text-neutral mb-4">
          Contact me
        </h2>

        <div className="flex flex-row gap-4">
          <NavLink
            to="https://github.com/nickastrin"
            target="_blank"
            rel="noreferrer"
            className={clsx(
              "rounded-full py-2 px-4",
              "flex flex-row gap-2 items-center",
              "bg-primary hover:bg-primary-light",
              "transition-all duration-300",
            )}
          >
            <img src={github} height={25} width={25} />
            <span className="text-dark font-semibold">GitHub</span>
          </NavLink>

          <NavLink
            to="https://www.linkedin.com/in/nikolaos-astrinakis/"
            target="_blank"
            rel="noreferrer"
            className={clsx(
              "rounded-full py-2 px-4",
              "flex flex-row gap-2 items-center",
              "bg-primary hover:bg-primary-light",
              "transition-all duration-300",
            )}
          >
            <img src={linkedIn} height={25} width={25} />
            <span className="text-dark font-semibold">LinkedIn</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
