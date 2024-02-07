import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
	DownloadIcon,
	CopyIcon,
	EyeNoneIcon,
	TextAlignBottomIcon,
	HeartIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

import supabaseIcon from "@/assets/supabase-logo-icon.png";
import tailwindIcon from "@/assets/tailwindcss-icon.svg";
import openAIIcon from "@/assets/openai-logomark.svg";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<div className="flex-grow">
				<div className="hero-wrapper">
					<div className="hero-box grid place-content-center px-10">
						<h2>Acquire new languages through the power of optimal input.</h2>
						<Link
							href="/auth"
							className={buttonVariants({
								variant: "outline",
								className: "w-fit px-15 bg-opacity-0 border",
							})}
						>
							Start Reading
						</Link>
					</div>
				</div>
				<section className="py-10 bg-white">
					<div className="container px-4 mx-auto sm:px-6 lg:px-8">
						<div className="lg:grid lg:grid-cols-3 lg:gap-8">
							<div>
								<h2 className="font-extrabold">Stephen Krashen{'\''}s Theory</h2>
								<p className="mt-4 text-lg text-gray-500">
									Stephen Krashen{'\''}s theory of second language acquisition
									consists of five main hypotheses. Our app is designed around
									these principles to provide the most effective language
									learning experience.
								</p>
							</div>
							<div className="mt-12 lg:mt-0 lg:col-span-2">
								<div className="grid grid-cols-2 gap-6">
									<Card className="col-span-2">
										<CardHeader className="flex flex-row items-center gap-2">
											<DownloadIcon className="size-[1.5em] align-baseline hidden sm:block" />
											<h4 className="font-medium text-gray-900">
												Optimal Input
											</h4>
										</CardHeader>
										<CardContent>
											<p className="text-base text-gray-500 w-fit">
												Progress comes from comprehending slightly advanced
												input.
											</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader className="flex flex-row items-center gap-2">
											<CopyIcon className="size-[1.5em] align-baseline hidden sm:block" />
											<h4 className=" font-medium text-gray-900">
												Acquisition-Learning
											</h4>
										</CardHeader>
										<CardContent>
											<p className="text-base text-gray-500 w-fit">
												Acquisition and learning are distinct. Acquisition leads
												to fluency.
											</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader className="flex flex-row items-center gap-2">
											<EyeNoneIcon className="size-[1.5em] align-baseline hidden sm:block" />
											<h4 className="font-medium text-gray-900">Monitor</h4>
										</CardHeader>
										<CardContent>
											<p className="text-base text-gray-500 w-fit">
												Conscious learning acts as a monitor or editor.
											</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader className="flex flex-row items-center gap-2">
											<TextAlignBottomIcon className="size-[1.5em] align-baseline hidden sm:block" />
											<h4 className="font-medium text-gray-900">
												Natural Order
											</h4>
										</CardHeader>
										<CardContent>
											<p className="text-base text-gray-500 w-fit">
												Language is acquired in a predictable order.
											</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader className="flex flex-row items-center gap-2">
											<HeartIcon className="size-[1.5em] align-baseline hidden sm:block" />
											<h4 className="font-medium text-gray-900">
												Affective Filter
											</h4>
										</CardHeader>
										<CardContent>
											<p className="text-base text-gray-500 w-fit">
												Negative emotions can hinder language acquisition.
											</p>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-20 bg-gradient-to-b from-red-50 to-yellow-50">
					<div className="container px-4 mx-auto sm:px-6 lg:px-8">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Example Short Story
						</h2>
						<p className="mt-4 text-lg text-gray-500">
							Here{'\''}s an example of a short story translated into a target
							language. Our app provides thousands of such stories to help you
							immerse yourself in the language.
						</p>
						<div className="mt-8 bg-white p-6 rounded-lg shadow space-y-6">
							<h3 className="text-xl">Een dag in het park</h3>
							<span className="text-base text-gray-600">Dutch</span>
							<p className="text-base text-gray-600">
								Abigail en John gingen op avontuur naar het park in Nederland
								met hun huisdieren Theo en Kaileigh. De zon scheen en de vogels
								zongen terwijl ze langs de kleurrijke tulpenvelden liepen.
								Plotseling joeg Theo, de avontuurlijke kat, een vlinder een boom
								in. Kaileigh, de speelse hond, blafte opgewonden en wilde
								meedoen. Abigail en John lachten en probeerden Theo over te
								halen om weer naar beneden te komen. Na een tijdje besloot Theo
								eindelijk terug te komen, tot grote opluchting van iedereen. Ze
								vervolgden hun wandeling en genoten van de prachtige bloemen en
								de frisse lucht. Naarmate de dag vorderde, picknickten ze bij
								een windmolen en deelden broodjes en verhalen. Het was een
								perfecte dag in het park, gevuld met gelach en vreugde.
							</p>
						</div>
					</div>
				</section>
				<section>
					<div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8">
						<h2 className="text-3xl font-extrabold text-gray-900">
							How It Works
						</h2>
						<p className="mt-4 text-lg text-gray-500">
							Our app is designed to provide you with the optimal input you need
							to acquire a new language. Here{'\''}s how it works:
						</p>
						<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
							<div>
								<h3 className="text-xl font-semibold text-gray-900">
									Step 1: Choose a Language
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Select the language you want to learn from our list of
									supported languages.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900">
									Step 2: Start Reading
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Begin reading short stories in your target language. Our app
									provides thousands of stories to help you immerse yourself in
									the language.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900">
									Step 3: Track Your Progress
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Our app tracks your reading progress and provides you with
									detailed statistics to help you stay motivated.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="bg-gradient-to-b from-violet-50 to-red-50">
					<div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Tech Stack
						</h2>
						<p className="mt-4 text-lg text-gray-500">
							This app was built as a capstone project for the Software
							Engineering bootcamp at BrainStation with the following tech
							stack:
						</p>
						<div className="mt-12 lg:mt-10 lg:col-span-2">
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-[5rem]">
								<div className="flex flex-col gap-2 items-center justify-between">
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
										alt="React icon"
									/>
									<p className="w-auto text-center">React</p>
								</div>
								<div className="flex flex-col gap-2 justify-between items-center">
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
										alt="Next.js icon"
										className="my-auto"
									/>
									<p className="w-auto text-center">Next.js</p>
								</div>
								<div className="flex flex-col gap-2 justify-between items-center">
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
										alt="TypeScript icon"
									/>
									<p className="w-auto text-center">TypeScript</p>
								</div>
								<div className="flex flex-col gap-2 items-center justify-between">
									<Image src={supabaseIcon} alt="Supabase icon" />
									<p className="w-auto text-center">Supabase</p>
								</div>
								<div className="flex flex-col gap-2 items-center justify-center">
									<img
										src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4"
										alt="shadcn/UI icon"
									/>
									<p className="w-auto text-center">shadcn/UI</p>
								</div>
								<div className="flex flex-col gap-2 items-center justify-between icon">
									<Image
										src={tailwindIcon}
										alt="Tailwind CSS icon"
										className="my-auto w-auto"
									/>
									<p className="w-auto text-center">Tailwind CSS</p>
								</div>
								<div className="flex flex-col gap-2 items-center justify-between">
									<Image src={openAIIcon} alt="OpenAI icon" />
									<p className="w-auto text-center">OpenAI</p>
								</div>
								<div className="flex flex-col gap-2 items-center justify-between">
									<img
										src="https://play-lh.googleusercontent.com/0IH4L3pX-jqQXKYCDmxTM5t3Tvak2cb_zUuIs9nKCHPeOqkaRJ_bRTq1qKawsSvunw"
										alt="DeepL icon"
									/>
									<p className="w-auto text-center">DeepL</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
