import { Button } from "./button";

export function Header() {
	return (
		<div>
			<div className="fixed pointer-events-none z-40 inset-0 h-20 bg-[hsla(0,0%,4%,.2)] backdrop-blur-md [maskImage:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]" />
			<div className="fixed border-b w-full border-zinc-800 h-20 top-0 backdrop-blur-xl" />
			<header className="fixed flex max-w-4xl mx-auto overflow-hidden top-4 z-50 h-12 saturate-150 left-4 right-4  ">
				<div className="flex mx-auto justify-between items-center w-full">
					<a href="/" className="flex items-center gap-2">
						<img src="/logo.svg" alt="6pm" className="h-9 w-9" />
						<div className="text-zinc-50 text-2xl font-semibold">6pm</div>
					</a>
					<nav className="flex items-center gap-2">
						<a
							href="/https://apps.apple.com/vn/app/6pm-finance-intelligence/id6504689878"
							rel="noopener noreferrer"
						>
							<Button className="rounded-md w-32 justify-center font-semibold">
								Download
							</Button>
						</a>
					</nav>
				</div>
			</header>
		</div>
	);
}
