import { Logo } from "@/components/generics/generics";

export function Navbar() {
  return (
    <>
      <div className="flex flex-row place-items-center gap-2 w-full py-4 px-6">
        <button className="p-0 bg-transparent flex place-items-center">
          <span className="material-symbols-rounded"> menu </span>
        </button>

        <Logo />
      </div>
    </>
  );
}
