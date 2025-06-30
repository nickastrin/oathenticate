import clsx from "clsx";

export function About() {
  return (
    <div
      className={clsx(
        "p-6 w-full flex flex-row gap-12 max-w-4xl",
        "justify-center place-items-center m-auto"
      )}
    >
      <div
        className={clsx(
          "border-2 border-primary h-64 w-64 rounded-xl",
          "hover:shadow-2xl hover:shadow-primary-light",
          "transition-all duration-300"
        )}
      />

      <div className="flex-1 flex flex-col gap-2">
        <h2 className="font-bold leading-tight text-2xl 3xl:text-4xl text-neutral mb-4">
          About me
        </h2>

        <h1 className="font-extrabold text-5xl">Nikolaos Astrinakis</h1>
        <p className="text-primary font-montserrat text-3xl mb-2">
          Software Engineer
        </p>

        <p className="font-montserrat text-neutral text-sm leading-loose">
          Software engineer with expertise in multiple ecosystems. Demonstrated
          success in delivering scalable applications and optimizing system
          performance. Strong academic background in Computer Engineering with
          focus on Algorithms and Data Engineering.
        </p>
      </div>
    </div>
  );
}
