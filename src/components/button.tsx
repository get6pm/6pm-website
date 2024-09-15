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
		primary: "bg-muted-background text-foreground",
		secondary: "bg-foreground text-muted-background",
	};

	return (
		<button
			type="button"
			className={cn(
				"inline-flex font-normal items-center rounded-lg px-2.5 h-10 text-sm",
				buttonVariants[variant],
				className,
			)}
		>
			{children}
		</button>
	);
}
