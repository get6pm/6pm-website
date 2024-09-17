import { IOS_STORE_URL } from "@/lib/constant";
import { Button } from "./button";
import Link from "next/link";

export function Header() {
	return (
		<div>
			<div className="fixed pointer-events-none z-40 border-b w-full border-border h-16 top-0 backdrop-blur-md  " />
			<header className="fixed flex max-w-4xl mx-auto overflow-hidden z-50 h-12 saturate-150 top-2 left-4 right-4">
				<div className="flex mx-auto justify-between items-center w-full">
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
		</div>
	);
}
