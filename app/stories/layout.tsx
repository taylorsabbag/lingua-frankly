import Link from "next/link";

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="main-container">
			<section className="py-10 px-4">
				<Link href="/stories" className="w-fit block">
					<h1 className="ml-2 mb-4 w-fit">Stories</h1>
				</Link>
				{children}
			</section>
		</main>
	);
}
