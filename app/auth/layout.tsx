import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthLayout({
	children,
	login,
	register,
}: {
	children: React.ReactNode;
	login: React.ReactNode;
	register: React.ReactNode;
}) {
	return (
		<main>
			<Tabs defaultValue="login" className="w-[380px] mx-auto">
				<TabsList className="w-full flex justify-between">
					<TabsTrigger className="w-full" value="login">
						Login
					</TabsTrigger>
					<TabsTrigger className="w-full" value="register">
						Register
					</TabsTrigger>
				</TabsList>
				{children}
				{login}
				{register}
			</Tabs>
		</main>
	);
}
