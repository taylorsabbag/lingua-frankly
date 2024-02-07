import { cn } from "@/lib/utils";
import { login } from "../actions";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";

export default function Login() {
	return (
		<TabsContent value="login">
			<Card className={cn("w-[380px]")}>
				<CardHeader>
					<CardTitle className="text-xl">Login</CardTitle>
					<CardDescription>Get your stories!</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<form action={login} className="space-y-8">
						<div>
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								name="email"
								placeholder="johnsmith@gmail.com"
								required
							/>
						</div>
						<div>
							<Label htmlFor="password">Password</Label>
							<Input
								type="password"
								name="password"
								required
								min={6}
								max={72}
							/>
						</div>
						<Button className="w-full" type="submit">
							Log In
						</Button>
					</form>
				</CardContent>
			</Card>
		</TabsContent>
	);
}
