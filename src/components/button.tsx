export function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const buttonVariants = {
    primary:
      "bg-zinc-50 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:text-zinc-50",
    secondary:
      "bg-zinc-900 border border-zinc-100 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 dark:text-zinc-950 dark:border-zinc-900",
  };

  return (
    <button
      className={`inline-flex items-center rounded-md px-2.5 h-10 text-sm ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}
