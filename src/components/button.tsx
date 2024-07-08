export function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const buttonVariants = {
    primary:
      "bg-zinc-950 hover:bg-zinc-800 text-zinc-50",
    secondary:
      "hover:bg-zinc-700 bg-zinc-100 hover:bg-zinc-300 text-zinc-950 border-zinc-900",
  };

  return (
    <button
      className={`inline-flex font-normal items-center rounded-md px-2.5 h-10 text-sm ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}
