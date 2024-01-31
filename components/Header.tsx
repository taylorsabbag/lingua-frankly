"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { logout } from "@/app/auth/actions";

import { buttonVariants } from "@/components/ui/button";

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const getIsUserLoggedIn = async () => {
			const supabase = createClient();
			const { data, error } = await supabase.auth.getSession();
			if (data.session) {
				setIsLoggedIn(true);
			}
			if (error) {
        console.error(error);
      }
			const subscription = supabase.auth.onAuthStateChange((event, session) => {
				console.log(event, session);
				if (event === "SIGNED_IN") {
					setIsLoggedIn(true);
				} else if (event === "SIGNED_OUT") {
					setIsLoggedIn(false);
				}
			});
		};

		getIsUserLoggedIn();
	}, []);

	return (
		<header className="flex w-full justify-between items-center bg-muted py-4 px-4 mb-4">
			<Link href="/">
				<h2>LinguaFrankly</h2>
			</Link>
			{isLoggedIn && (
				<Button
					type={undefined}
					formAction={logout}
					className={buttonVariants({ variant: "outline" })}
				>
					Log Out
				</Button>
			)}
			{!isLoggedIn && (
				<Link href="/auth" className={buttonVariants({ variant: "outline" })}>
					Log In
				</Link>
			)}
		</header>
	);
}
