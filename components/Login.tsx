"use client"
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { AuthError } from "@supabase/supabase-js";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";

export default function Login() {
	const formSchema = z.object({
		email: z.string().email().min(6).max(40),
		password: z.string().min(6).max(50),
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values: z.infer<typeof formSchema>,
	) => {
		// try {
		// 	const { email, password } = values;
		// 	const response = await authenticateUserByPassword(email, password);
		// 	const error = response?.error as AuthError | null;
		// 	if (error) {
		// 		console.log(error);
		// 		return;
		// 	}
		// 	navigate("/");
		// 	// TODO:  Change login state globally or handle session somehow
		// } catch (err) {
		// 	console.error(err);
		// }
	};

	return (
		<TabsContent value="login">
			<Card className={cn("w-[380px]")}>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Get your stories!</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<Form {...form}>
						<form
							id="loginForm"
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="e.g. johnsmith@gmail.com"
												{...form.register("email")}
												{...field}
												required
											/>
										</FormControl>
										<FormDescription>
											The email you used to register.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												{...form.register("password")}
												{...field}
												required
											/>
										</FormControl>
										<FormDescription>
											Between 6 and 72 characters.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<Button form="loginForm" className="w-full" type="submit">
						Log In
					</Button>
				</CardFooter>
			</Card>
		</TabsContent>
	);
};
