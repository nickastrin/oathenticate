import { Logo } from "@/components/generics/Logo";
import { NavigationButton } from "@/components/navigation/NavigationButton";

export function Sidebar() {
  return (
    <div className="py-8 px-2 bg-dark rounded-r-xl flex flex-col">
      <div className="grid gap-8 place-items-center mb-auto">
        <Logo />

        <NavigationButton path="/" icon="home" label="Home" />
        <NavigationButton path="/settings" icon="settings" label="Settings" />
        <NavigationButton path="/about" icon="groups" label="About" />
      </div>

      <NavigationButton path="login" icon="login" label="Login" />
    </div>
  );
}
