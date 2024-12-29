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
      className={clsx("size-full place-items-center", "flex flex-col gap-16")}
    >
      <div className="flex flex-col place-items-center gap-1">
        <div className="text-3xl font-extrabold text-white leading-tight">
          <span>Welcome back</span>
          <span className="text-primary-light"> .</span>
        </div>

        <div className="font-montserrat text-wrap text-md text-neutral">
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
          className="flex flex-col w-full"
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
              "text-neutral-dark text-xs bg-transparent "
            )}
          >
            Forgot your password?
          </button>

          <button
            type="submit"
            className="mt-12 bg-primary text-dark text-lg rounded-full py-3"
          >
            Sign in
          </button>
        </form>
      </FormProvider>

      <div className="text-neutral-dark text-xs mt-auto">
        <span> Don&apos;t have an account? </span>
        <NavLink to="/register" className="p-0 bg-transparent text-accent">
          Sign up
        </NavLink>
      </div>
    </div>
  );
}
