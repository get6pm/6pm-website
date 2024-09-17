import { IOS_STORE_URL } from "@/lib/constant";
import { Button } from "./button";
import Link from "next/link";

export function Header() {
	return (
		<header className="sticky mx-auto z-50 top-0 saturate-100 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex justify-between items-center max-w-4xl w-full mx-auto h-16 px-4 md:px-0">
				<Link href="/" className="flex items-center gap-3">
					<img src="/logo.svg" alt="6pm" className="h-9 w-9" />
					<div className="text-foreground text-xl font-medium">6pm</div>
				</Link>
				<nav className="flex items-center gap-3">
					<a href={IOS_STORE_URL} rel="noopener noreferrer" target="_blank">
						<Button className="w-32 justify-center font-semibold">
							Download
						</Button>
					</a>
				</nav>
			</div>
		</header>
	);
}
