import { NavigationButton } from "@/components/navigation/NavigationButton";

export function Sidebar() {
  return (
    <div className="py-8 px-2 bg-dark rounded-r-xl flex flex-col">
      <div className="grid gap-8 place-items-center mb-auto">
        <div className="font-montserrat font-extrabold">
          <span className="tracking-widest">OATH</span>
          <span className="text-primary-light"> .</span>
        </div>

        <NavigationButton path="/" icon="home" label="Home" />
        <NavigationButton path="/settings" icon="settings" label="Settings" />
        <NavigationButton path="/about" icon="groups" label="About" />
      </div>

      <NavigationButton path="login" icon="login" label="Login" />
    </div>
  );
}
