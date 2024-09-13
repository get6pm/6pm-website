import { cn } from "@/lib/utils";

export function Button({
	children,
	variant = "primary",
	className,
}: {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	className?: string;
}) {
	const buttonVariants = {
		primary: "bg-zinc-800 hover:bg-zinc-800 text-zinc-50",
		secondary: "bg-zinc-100 hover:bg-zinc-300 text-zinc-950 border-zinc-900",
	};

	return (
		<button
			type="button"
			className={cn(
				"inline-flex font-normal items-center rounded-md px-2.5 h-10 text-sm",
				buttonVariants[variant],
				className,
			)}
		>
			{children}
		</button>
	);
}
