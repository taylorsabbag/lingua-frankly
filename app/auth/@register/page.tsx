"use client";

import { cn } from "@/lib/utils";
import { signup } from "../actions";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { TabsContent } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Register() {
	const languages = [
		"English",
		"Spanish",
		"French",
		"German",
		"Italian",
		"Russian",
		"Chinese",
		"Japanese",
		"Arabic",
		"Hindi",
		"Portuguese",
		"Dutch",
		"Swedish",
		"Korean",
		"Turkish",
		"Polish",
		"Norwegian",
		"Danish",
		"Finnish",
		"Greek",
		"Czech",
		"Romanian",
		"Hungarian",
		"Thai",
		"Indonesian",
		"Vietnamese",
		"Hebrew",
		"Persian",
		"Bulgarian",
	] as const;
	const languageLevels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

	const genres = [
		"Action",
		"Adventure",
		"Comedy",
		"Crime",
		"Drama",
		"Fantasy",
		"Horror",
		"Mystery",
		"Romance",
		"Science Fiction",
		"Thriller",
		"Western",
	] as const;

	return (
		<TabsContent value="register">
			<Card className={cn("w-[380px]")}>
				<CardHeader>
					<CardTitle>
						<h4>Register</h4>
					</CardTitle>
					<CardDescription>
						<span className="text-red-500">*</span> indicates a required field.
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<form id="registerForm" action={signup} className="space-y-8">
						<div>
							<Label htmlFor="email">
								Email <span className="text-red-500">*</span>
							</Label>
							<Input
								type="email"
								name="email"
								placeholder="johnsmith@gmail.com"
								required
							/>
						</div>
						<div>
							<Label htmlFor="password">
								Password <span className="text-red-500">*</span>
							</Label>
							<Input
								type="password"
								name="password"
								required
								min={6}
								max={72}
							/>
						</div>
						<div>
							<Label htmlFor="confirmPassword">
								Confirm Password <span className="text-red-500">*</span>
							</Label>
							<Input
								type="password"
								name="confirmPassword"
								required
								min={6}
								max={72}
							/>
						</div>
						<div>
							<Label htmlFor="firstName">First Name</Label>
							<Input type="text" name="firstName" placeholder="John" />
						</div>
						<div>
							<Label htmlFor="lastName">Last Name</Label>
							<Input type="text" name="lastName" placeholder="Smith" />
						</div>
						<div>
							<Label htmlFor="baseLanguage">
								Native Language (Mother Tongue){" "}
								<span className="text-red-500">*</span>
							</Label>
							<Select required name="baseLanguage">
								<SelectTrigger>
									<SelectValue placeholder="Select a language" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Native Language (Mother Tongue)</SelectLabel>
										{languages.map((language) => (
											<SelectItem key={language} value={language}>
												{language}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor="baseLanguage">
								Target Language <span className="text-red-500">*</span>
							</Label>
							<Select required name="targetLanguage">
								<SelectTrigger>
									<SelectValue placeholder="Select a language" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Target Language</SelectLabel>
										{languages.map((language) => (
											<SelectItem key={language} value={language}>
												{language}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor="languageLevel">
								Language Level <span className="text-red-500">*</span>
							</Label>
							<Select required name="languageLevel">
								<SelectTrigger>
									<SelectValue placeholder="Select a language level" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>CEFR Language Levels</SelectLabel>
										{languageLevels.map((level) => (
											<SelectItem key={level} value={level}>
												{level}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label className="block mb-2">
								Story Genres (select up to 3)
							</Label>
							<div className="flex gap-2 flex-wrap">
								{genres.map((genre) => (
									<label
										key={genre}
										htmlFor={genre}
										onClick={(e) => {
											const checkedGenres =
												document.getElementsByName("genres");
											const numberOfCheckedGenres = [...checkedGenres].filter(
												(item) => item.checked === true,
											).length;
											console.log(numberOfCheckedGenres);
											console.log(e);
										}}
									>
										<input
											id={genre}
											type="checkbox"
											name="genres"
											value={genre}
											hidden
										/>
										<Badge id={`${genre}Badge`}>{genre}</Badge>
									</label>
								))}
							</div>
						</div>
						<div className="flex items-center space-x-2">
							<Checkbox name="autoGenerate" id="autoGenerate" checked={true} />
							<Label htmlFor="autoGenerate">
								I want my stories to be automatically generated.
								<TooltipProvider>
									<Tooltip className="self-end">
										<TooltipContent>
											<p className="text-xs">
												If this is checked, your stories will be automatically
												generated. This can be changed later in your profile
												settings.
											</p>
										</TooltipContent>
										<TooltipTrigger>
											<Label className="border rounded-full bg-blue-950 text-white shadow-sm">
												?
											</Label>
										</TooltipTrigger>
									</Tooltip>
								</TooltipProvider>
							</Label>
						</div>
						<Button form="registerForm" className="w-full" type="submit">
							Register
						</Button>
					</form>
				</CardContent>
			</Card>
		</TabsContent>
	);
}
