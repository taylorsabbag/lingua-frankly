import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DownloadIcon, CopyIcon, EyeNoneIcon, TextAlignBottomIcon, HeartIcon } from "@radix-ui/react-icons";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<div>
				<div className="hero-wrapper">
					<div className="hero-box grid place-content-center">
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
								<h2>Stephen Krashen's Theory</h2>
								<p className="mt-4 text-lg text-gray-500">
									Stephen Krashen's theory of second language acquisition
									consists of five main hypotheses. Our app is designed around
									these principles to provide the most effective language
									learning experience.
								</p>
							</div>
							<div className="mt-12 lg:mt-0 lg:col-span-2">
								<div className="grid grid-cols-2 gap-6">
                <Card className="col-span-2">
										<CardHeader className="flex flex-row items-center gap-2">
                      <DownloadIcon className="size-10 align-baseline" />
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
                      <CopyIcon className="size-10 align-baseline" />
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
											<EyeNoneIcon className="size-10 align-baseline" />
											<h4 className="font-medium text-gray-900">
												Monitor
											</h4>
										</CardHeader>
										<CardContent>
											<p className="text-base text-gray-500 w-fit">
												Conscious learning acts as a monitor or editor.
											</p>
										</CardContent>
									</Card>
									<Card>
										<CardHeader className="flex flex-row items-center gap-2">
											<TextAlignBottomIcon className="size-10 align-baseline" />
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
										<CardHeader  className="flex flex-row items-center gap-2">
											<HeartIcon className="size-10 align-baseline" />
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
				<section className="py-20 bg-orange-50">
					<div className="container px-4 mx-auto sm:px-6 lg:px-8">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Example Short Story
						</h2>
						<p className="mt-4 text-lg text-gray-500">
							Here's an example of a short story translated into a target language. Our app provides thousands of such stories to help you
							immerse yourself in the language.
						</p>
						<div className="mt-8 bg-white p-6 rounded-lg shadow">
							<p className="text-lg text-gray-600">
								[Short story in target language goes here]
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
