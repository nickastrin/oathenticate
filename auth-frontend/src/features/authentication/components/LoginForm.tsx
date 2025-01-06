import { FormInput, FormPasswordInput } from "@/components/forms/forms";
import { authService } from "@/features/authentication/services/auth-service";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface LoginForm {
  email: string;
  password: string;
}

export function LoginForm() {
  const { login } = authService();

  const methods = useForm<LoginForm>();

  return (
    <div
      className={clsx("size-full place-items-center", "flex flex-col gap-12")}
    >
      <div className="flex flex-col place-items-center my-2 gap-1">
        <div
          className={clsx(
            "font-extrabold text-white leading-tight",
            "text-3xl 3xl:text-[36px]",
          )}
        >
          <span>Welcome back</span>
          <span className="text-primary-light"> .</span>
        </div>

        <div
          className={clsx(
            "font-montserrat text-wrap text-neutral tracking-tighter",
            "text-md 3xl:text-[22px]",
          )}
        >
          <span>Sign in to your</span>
          <span className="font-bold text-accent"> account </span>
        </div>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(async () => {
            const { email, password } = methods.getValues();
            await login(email, password);
          })}
          className="flex flex-col w-full mb-8"
        >
          <div className="flex flex-col gap-4">
            <FormInput name="email" icon="email" placeholder="Your email" />
            <FormPasswordInput
              name="password"
              icon="lock"
              placeholder="Your password"
            />
          </div>

          <button
            type="button"
            className={clsx(
              "mt-2 p-0 place-self-end",
              "text-neutral-dark text-xs 3xl:text-sm bg-transparent",
            )}
          >
            Forgot your password?
          </button>

          <button
            type="submit"
            className={clsx(
              "mt-12 text-dark text-lg rounded-full py-3",
              "transition-all duration-300",
              "bg-primary hover:bg-primary-light",
            )}
          >
            Sign in
          </button>
        </form>
      </FormProvider>

      <div className="text-neutral-dark text-xs 3xl:text-sm mt-auto">
        <span> Don&apos;t have an account? </span>
        <NavLink to="/register" className="p-0 bg-transparent text-accent">
          Sign up
        </NavLink>
      </div>
    </div>
  );
}
