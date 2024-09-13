import React from "react";
import { Button } from "@/components/button";
import { Apple } from "@/components/icons/apple";

const features = [
	{
		name: "Smart Insight",
		imageSrc: "/smart-insight.png",
		key: "smart-insight",
	},
	{
		name: "Fast & Secure",
		imageSrc: "/fast-and-secure.png",
		key: "fast-and-secure",
	},
	{
		name: "Wallet Accounts",
		imageSrc: "/wallet-accounts.png",
		key: "wallet-accounts",
	},
	{
		name: "Multi-currencies",
		imageSrc: "/multi-currencies.png",
		key: "multi-currencies",
	},
];

export default function Home() {
	return (
		<div className="px-6 md:py-16 py-10 font-light animate-in fade-in duration-300">
			<div className="flex justify-center">
				<div className="flex md:flex-row flex-col max-w-4xl">
					<section className="flex h-full flex-col pt-20">
						<div className="flex w-full max-w-lg flex-col md:items-start items-center space-y-6 md:space-y-5">
							<h1 className="relative text-5xl font-medium text-zinc-950 dark:text-zinc-50">
								Manage your expenses & budgets seamlessly.
							</h1>
							<p className="text-zinc-600 dark:text-zinc-400 ">
								We've just launched! Get your AI finance assistant for free.
							</p>
							<a
								href="https://apps.apple.com/vn/app/6pm-finance-intelligence/id6504689878"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 "
							>
								<Button variant="secondary" className="h-12">
									<Apple className="h-4 w-4 mr-1.5 dark:fill-white" />
									<div className="flex flex-col ml-2 text-left leading-3">
										<div className="text-xs font-bold">Download on the</div>
										<div className="text-xl leading-4 text-extrabold">
											App Store
										</div>
									</div>
								</Button>
							</a>
						</div>
					</section>

					<section className="mx-auto max-w-3xl md:py-20 py-10">
						<div className="relative -mx-6 sm:mx-0">
							<div className="pointer-events-none absolute left-0 top-[-100px] z-[-1] h-full w-full bg-[radial-gradient(100%_100%_at_50%_50%,hsl(0deg_0%_100%/8%)_0,hsl(0deg_0%_100%/2%)_50%)] blur-2xl md:left-[-100px] md:h-[calc(100%+200px)] md:w-[calc(100%+200px)]" />
							<div className="flex items-center justify-center ">
								<img
									src="/demo-ui.svg"
									alt="Hero"
									className="h-full w-full -z-10"
								/>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="flex justify-center flex-wrap w-full py-20">
				<div className="flex max-w-4xl items-start flex-col space-y-10">
					<section className="flex w-full flex-col">
						<div className="flex flex-col w-full font-bold md:text-8xl text-6xl space-y-5">
							<h1 className="text-zinc-950 dark:text-zinc-50">Finance</h1>
							<h1 className=" text-zinc-700 dark:text-zinc-300">
								Intelligence.
							</h1>
						</div>
					</section>

					<section className="flex flex-row flex-wrap">
						{features.map(({ name, imageSrc, key }) => (
							<div className="flex w-1/2 md:w-1/4 p-2" key={key}>
								<div className="relative h-full">
									<div className="bg-zinc-800 rounded-2xl md:rounded-3xl h-full bg-opacity-20 overflow-hidden">
										<img src={imageSrc} alt={key} />
									</div>
									<div className="absolute bottom-0 left-0 right-0 pb-4 text-center md:text-lg text-xs text-zinc-50 font-bold">
										{name}
									</div>
								</div>
							</div>
						))}
					</section>

					<section className="max-w-xl">
						<div className="text-zinc-700 dark:text-zinc-300 text-xl">
							Track your expenses, set financial goals, scan receipts and get
							personalized insights to helps you make better financial
							decisions.
						</div>
					</section>
				</div>
			</div>

			<div className="flex justify-center py-20 md:py-40">
				<div className="flex max-w-4xl items-start flex-col">
					<div className="flex w-full flex-col space-y-10">
						<section className="flex w-full flex-col">
							<div className="flex flex-row space-x-10 items-center">
								<div className="text-zinc-700 dark:text-zinc-50 text-5xl font-medium leading-tight">
									Get 6pm
									<br /> for Free.
								</div>
								<div className="group relative">
									<img
										src="/download.svg"
										alt="download"
										className=" group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
									/>
									<img
										src="/download-hover.svg"
										alt="download"
										className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300 ease-in-out"
									/>
								</div>
							</div>
						</section>

						<section>
							<div className="text-zinc-600 dark:text-zinc-400 text-xl">
								6pm is free to download and use. We offer premium subscription
								plans for advanced features, primarily to cover AI server costs,
								starting at just $1.99 per month. 6pm is proudly{" "}
								<a
									href="https://github.com/get6pm/6pm"
									rel="noopener noreferrer"
									target="_blank"
									className="underline underline-offset-4 text-zinc-50"
								>
									open source
								</a>{" "}
								and made in Vietnam. Get in touch with questions or feedback at{" "}
								<a
									href="mailto:support@get6pm.com"
									rel="noopener noreferrer"
									target="_blank"
									className="underline underline-offset-4 text-zinc-50"
								>
									support@get6pm.com
								</a>{" "}
								or on our{" "}
								<a
									href="https://discord.com/invite/RsANf429aQ"
									rel="noopener noreferrer"
									target="_blank"
									className="underline underline-offset-4 text-zinc-50"
								>
									Discord
								</a>
								.
							</div>
						</section>
					</div>
				</div>
			</div>

			<div className="flex justify-center pt-50">
				<div className="flex max-w-4xl w-full items-start justify-between">
					<section>
						<div className="text-zinc-600 dark:text-zinc-400">
							Copyright © 6pm • 2024.
						</div>
					</section>

					<section>
						<a href="/privacy-policy" className="text-zinc-50">
							Privacy Policy
						</a>
					</section>
				</div>
			</div>
		</div>
	);
}
