import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthLayout({
	login,
	register,
}: {
	login: React.ReactNode;
	register: React.ReactNode;
}) {
	return (
		<main>
			<Tabs defaultValue="login" className="w-[380px] mx-auto mt-10">
				<TabsList className="w-full flex justify-between">
					<TabsTrigger className="w-full" value="login">
						Login
					</TabsTrigger>
					<TabsTrigger className="w-full" value="register">
						Register
					</TabsTrigger>
				</TabsList>
				{login}
				{register}
			</Tabs>
		</main>
	);
}
