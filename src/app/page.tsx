import React from "react";
import { Button } from "@/components/button";
import { Apple } from "@/components/icons/apple";
import { DISCORD_6PM, GITHUB_6PM, IOS_STORE_URL } from "@/lib/constant";

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
				<div className="flex md:flex-row flex-col max-w-4xl w-full">
					<section className="flex h-full flex-col pt-20 md:w-2/3 w-full">
						<div className="flex flex-col md:items-start items-center space-y-6 md:space-y-5">
							<h1 className="md:text-6xl text-5xl font-medium md:leading-tight text-foreground">
								Manage your expenses & budgets seamlessly.
							</h1>
							<p className="text-muted-foreground">
								We've just launched! Get your AI finance assistant for free.
							</p>
							<a
								href={IOS_STORE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4"
							>
								<Button variant="secondary" className="h-14 space-x-2 px-4">
									<Apple className="h-4 w-4 dark:fill-white" />
									<div className="flex flex-col text-left">
										<div className="font-semibold leading-4">
											Download on the
										</div>
										<div className="text-2xl font-bold leading-6">
											App Store
										</div>
									</div>
								</Button>
							</a>
						</div>
					</section>

					<section className="mx-auto max-w-3xl md:w-1/3 w-full md:py-20 py-10 px-5">
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
							<h1 className="text-foreground">Finance</h1>
							<h1 className=" text-muted-foreground">Intelligence.</h1>
						</div>
					</section>

					<section className="flex flex-row flex-wrap">
						{features.map(({ name, imageSrc, key }) => (
							<div className="flex w-1/2 md:w-1/4 p-2 -z-10" key={key}>
								<div className="relative h-full">
									<div className="bg-[#2E2E33]/25 h-full bg-opacity-20 overflow-hidden border rounded-2xl md:rounded-3xl border-[#A8AAB2]/25">
										<img src={imageSrc} alt={key} />
									</div>
									<div className="absolute bottom-0 left-0 right-0 pb-4 text-center md:text-xl text-md text-foreground font-bold">
										{name}
									</div>
								</div>
							</div>
						))}
					</section>

					<section className="max-w-xl">
						<div className="text-muted-foreground text-2xl">
							Track your expenses, set financial goals, scan receipts and get
							personalized insights to helps you make better financial
							decisions.
						</div>
					</section>
				</div>
			</div>

			<div className="flex justify-center py-20 md:py-40">
				<div className="flex max-w-4xl items-start flex-col w-full">
					<div className="flex w-full flex-col space-y-10 ">
						<section className="flex flex-col">
							<div className="flex flex-row space-x-10 items-center">
								<div className="text-foreground text-6xl font-medium leading-tight">
									Get 6pm
									<br /> for Free.
								</div>
								<div className="group relative">
									<a href={IOS_STORE_URL} rel="noopener noreferrer">
										<img
											src="/download.svg"
											alt="download"
											className=" group-hover:opacity-0 transition-opacity duration-700 ease-linear"
										/>
										<img
											src="/download-hover.svg"
											alt="download"
											className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-700 ease-linear"
										/>
									</a>
								</div>
							</div>
						</section>

						<section>
							<div className="text-muted-foreground text-2xl max-w-3xl">
								6pm is free to download and use. We offer premium subscription
								plans for advanced features, primarily to cover AI server costs,
								starting at just $1.99 per month. 6pm is proudly{" "}
								<a
									href={GITHUB_6PM}
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
									href={DISCORD_6PM}
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
						<div className="text-muted-foreground">Copyright © 6pm • 2024.</div>
					</section>

					<section>
						<a href="/privacy-policy" className="text-foreground">
							Privacy Policy
						</a>
					</section>
				</div>
			</div>
		</div>
	);
}
