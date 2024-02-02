"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { isUserLoggedIn, logout } from "@/app/auth/actions";
import Image from "next/image";
import logo from "@/app/LinguaFrankly_icon.png";

import { buttonVariants } from "@/components/ui/button";

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const getIsUserLoggedIn = async () => {
			const supabase = createClient();
			const subscription = supabase.auth.onAuthStateChange((event, session) => {
				if (event === "SIGNED_IN") {
					setIsLoggedIn(() => true);
				} else if (event === "SIGNED_OUT") {
					setIsLoggedIn(() => false);
				}
			});
			const user = await isUserLoggedIn(); // Don't hate me Andrew. I created this first, then realized it didn't return a boolean. Too much work to fix.
			if (user) {
				setIsLoggedIn(() => true);
			} else {
				setIsLoggedIn(() => false);
			}
		};

		getIsUserLoggedIn();
	}, []);

	return (
		<header className="flex w-full justify-around sm:justify-between items-center py-4 px-4 mb-4 bg-blue-950 text-white">
			<Link href="/" className="flex gap-2">
				<Image src={logo} alt="" className="logo" />
				<h4 className="hidden sm:block">LinguaFrankly</h4>
			</Link>
			<div className="flex items-center gap-6">
				{isLoggedIn && (
					<>
						<Link href="/stories" className="text-sm">
							Stories
						</Link>
						<Link href="/profile" className="text-sm">
							Profile
						</Link>
						<form action={logout}>
							<Button type="submit">Log Out</Button>
						</form>
					</>
				)}
				{!isLoggedIn && (
					<Link
						href="/auth"
						className={buttonVariants({
							variant: "outline",
							className: "text-black",
						})}
					>
						Log In
					</Link>
				)}
			</div>
		</header>
	);
}
