import "@/styles/globals.css";
import "@/styles/reset.css";
import type { Metadata } from "next";
import { Fraunces as FontSerif, Inter as FontSans } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { cn } from "@/lib/utils";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontSerif = FontSerif({
	subsets: ["latin"],
	variable: "--font-serif",
});

export const metadata: Metadata = {
	title: "LinguaFrankly",
	description: "Learn language as children do",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
					fontSerif.variable,
				)}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
