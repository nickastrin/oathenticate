export function TokenInvalid() {
  return (
    <div className="text-center">
      <p className="text-2xl mb-4 font-bold text-neutral font-montserrat">
        Your token is <span className="text-accent">invalid</span>
      </p>
      <p className="text-xl mb-8 text-neutral"> Please refresh it </p>
    </div>
  );
}
