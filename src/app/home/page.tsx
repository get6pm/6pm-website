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
		name: "Smart Insight",
		imageSrc: "/smart-insight.png",
		key: "smart-insight",
	},
	{
		name: "Smart Insight",
		imageSrc: "/smart-insight.png",
		key: "smart-insight",
	},
	{
		name: "Smart Insight",
		imageSrc: "/smart-insight.png",
		key: "smart-insight",
	},
];

const Home = () => {
	return (
		<div className=" px-6 py-16 font-light animate-in fade-in duration-300">
			<div className="flex justify-center">
				<div className="flex flex-row max-w-4xl">
					<section className="flex h-full flex-col pt-20">
						<div className="flex w-full max-w-lg flex-col ">
							<h1 className="relative mb-6 text-5xl font-medium text-zinc-950 dark:text-zinc-50">
								Manage your expenses & budgets seamlessly.
							</h1>
							<p className="text-zinc-600 dark:text-zinc-400 text-sm">
								We’ve just launched! Get your AI finance assistant for free.
							</p>
							<a
								href="/home"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4"
							>
								<Button variant="secondary" className="h-12">
									<Apple className="h-4 w-4 mr-1.5 dark:fill-white" />
									<div className="flex flex-col ml-2 text-bold text-left leading-3">
										<div className="text-xs ">Download on the</div>
										<div className="text-lg leading-4">App Store</div>
									</div>
								</Button>
							</a>
						</div>
					</section>

					<section className="mx-auto max-w-3xl py-24">
						<div className="relative -mx-6 sm:mx-0">
							<div className="pointer-events-none absolute left-0 top-[-100px] z-[-1] h-full w-full bg-[radial-gradient(100%_100%_at_50%_50%,hsl(0deg_0%_100%/8%)_0,hsl(0deg_0%_100%/2%)_50%)] blur-2xl md:left-[-100px] md:h-[calc(100%+200px)] md:w-[calc(100%+200px)]" />
							<div className="flex items-center justify-center">
								<img src="/demo-ui.svg" alt="Hero" className="h-full w-full " />
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="flex flex-row">
				<section className="flex h-full flex-col w-full  pt-20">
					<div className="flex w-full max-w-lg flex-col font-bold text-7xl">
						<h1 className="relative mb-6 text-zinc-950 dark:text-zinc-50">
							Finance
						</h1>
						<h1 className=" mb-6 text-zinc-700 dark:text-zinc-200">
							Intelligence.
						</h1>
					</div>

					{/* Image list */}
					<div className="flex flex-row w-full max-w-lg">
						{features.map(({ name, imageSrc, key }) => (
							<div className="w-1/4 relative" key={key}>
								<div className="bg-zinc-800 rounded-3xl h-">
									<img src="/smart-insight.png" alt="smart-insight" />
								</div>
								<div className="absolute bottom-0 left-0 right-0 pb-4 text-center text-lg text-zinc-50 font-bold">
									{name}
								</div>
							</div>
						))}
					</div>
					<div className="pt-10 flex w-full max-w-lg flex-col text-zinc-700 dark:text-zinc-200">
						Track your expenses, set financial goals, scan receipts and get
						personalized insights to helps you make better financial decisions.
					</div>
				</section>
			</div>

			<div className="pt-20">
				<section className="mx-auto text-center max-w-3xl">
					<span className="text-center font-normal text-sm text-zinc-500 dark:text-zinc-400">
						by{" "}
						<a
							href="https://github.com/duongdev"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-4 text-zinc-50"
						>
							Dustin Do{" "}
						</a>
						&{" "}
						<a
							href="https://github.com/bkdev98"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-4 text-zinc-50"
						>
							Quoc Khanh
						</a>
					</span>
				</section>
			</div>
		</div>
	);
};

export default Home;
