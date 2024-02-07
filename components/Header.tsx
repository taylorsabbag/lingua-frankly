import { logout } from "@/app/auth/actions";
import { isUserLoggedIn } from "@/app/auth/actions";
import logo from "@/assets/LinguaFrankly_icon.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default async function Header() {
	const user = await isUserLoggedIn();

	return (
		<header className="flex w-full justify-around sm:justify-between items-center py-6 px-4 bg-foreground text-white">
			<Link href="/" className="flex gap-2">
				<Image src={logo} alt="" className="logo" />
				<h4 className="hidden sm:block">LinguaFrankly</h4>
			</Link>
			<div className="flex items-center gap-6">
				{user && (
					<>
						<Link href="/stories" className="text-sm">
							Stories
						</Link>
						<Link href="/profile" className="text-sm">
							Profile
						</Link>
						<form action={logout}>
							<Button
								className={buttonVariants({ variant: "destructive" })}
								type="submit"
							>
								Log Out
							</Button>
						</form>
					</>
				)}

				{!user && (
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
