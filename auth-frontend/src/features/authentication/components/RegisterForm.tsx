import { FormInput, FormPasswordInput, Spinner } from "@/components";
import { authService } from "@/features/authentication/services";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router";
import clsx from "clsx";

interface RegisterForm {
  email: string;
  password: string;
  repeatPassword: string;
}

export function RegisterForm() {
  const { register } = authService();

  const methods = useForm<RegisterForm>();

  return (
    <div
      className={clsx("size-full place-items-center", "flex flex-col gap-10")}
    >
      <div className="flex flex-col text-center gap-1">
        <h1
          className={clsx(
            "font-extrabold text-white leading-tight",
            "text-3xl 3xl:text-4xl",
          )}
        >
          <span>Hey there</span>
          <span className="text-primary-light"> !</span>
        </h1>

        <p
          className={clsx(
            "font-montserrat text-wrap text-neutral tracking-tighter",
            "text-md 3xl:text-lg",
          )}
        >
          <span>Your account is a few quick</span>
          <span className="font-bold text-accent"> steps </span>
          <span>away</span>
        </p>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(async () => {
            const { email, password, repeatPassword } = methods.getValues();
            if (password === repeatPassword) {
              await register(email, password);
            }
          })}
          className="flex flex-col w-full"
        >
          <div className="flex flex-col gap-4">
            <FormInput
              name="email"
              icon="email"
              placeholder="Your email"
              required
            />
            <FormPasswordInput
              name="password"
              icon="lock"
              placeholder="Your password"
            />
            <FormPasswordInput
              name="repeatPassword"
              icon="lock_reset"
              placeholder="Repeat password"
            />
          </div>

          <button
            type="submit"
            className={clsx(
              "mt-12 text-dark text-lg rounded-full py-3",
              "transition-all duration-300 flex justify-center",
              "bg-primary hover:bg-primary-light",
            )}
          >
            {methods.formState.isSubmitting ? <Spinner /> : "Sign up"}
          </button>
        </form>
      </FormProvider>

      <p className="text-neutral-dark text-xs 3xl:text-sm mt-auto">
        <span> Already have an account? </span>
        <NavLink to="/login" className="p-0 bg-transparent text-accent">
          Sign in
        </NavLink>
      </p>
    </div>
  );
}
