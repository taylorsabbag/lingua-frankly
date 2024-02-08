"use server";

import { createStory } from "@/data/stories/index";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import { UUID } from "crypto";
import { createClient } from "@/utils/supabase/actions";

export async function isUserLoggedIn() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();
	return user;
}

export async function login(formData: FormData) {
	const formDataSchema = z.object({
		email: z.string().email(),
		password: z.string().min(6).max(72),
	});
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const result = formDataSchema.safeParse(data);
	if (!result.success) {
		console.error(result.error);
		return;
	}

	try {
		const { error } = await supabase.auth.signInWithPassword(data);
		if (error) throw new Error(error.message);
		revalidatePath("/", "layout");
	} catch (error) {
		console.error(error);
		redirect("/error");
	}
	redirect("/stories");
}

export async function logout() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error(error);
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signup(formData: FormData) {
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
	const languageSchema = z.enum([...languages]);

	const languageLevels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
	const languageLevelSchema = z.enum([...languageLevels]);

	
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
	const genreSchema = z.enum([...genres]);

	const formDataSchema = z
		.object({
			email: z.string().email().min(6).max(40),
			password: z.string().min(6).max(72),
			confirmPassword: z.string().min(6).max(72),
			firstName: z.string().max(30),
			lastName: z.string().max(30),
			baseLanguage: languageSchema,
			targetLanguage: languageSchema,
			languageLevel: languageLevelSchema,
			genres: genreSchema,
			peopleNames: z.string(),
			petNames: z.string(),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: "Please provide matching passwords.",
			path: ["confirmPassword"],
		});
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const extractedFormData = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
		confirmPassword: formData.get("confirmPassword") as string,
		firstName: formData.get("firstName") as string,
		lastName: formData.get("lastName") as string,
		baseLanguage: formData.get("baseLanguage") as string,
		targetLanguage: formData.get("targetLanguage") as string,
		languageLevel: formData.get("languageLevel") as string,
		genres: formData.getAll("genres").join(', ') as string,
		peopleNames: formData.get('peopleNames') as string,
		petNames: formData.get('petNames') as string,
	};

	const result = formDataSchema.safeParse(extractedFormData);
	if (!result.success) {
		console.error(result.error);
		return;
	}

	const { data: userData, error: userError } = await supabase.auth.signUp({
		email: extractedFormData.email,
		password: extractedFormData.password,
	});
	const { error: profileError } = await supabase
		.from("profiles")
		.update({
			email: extractedFormData.email,
			first_name: extractedFormData.firstName,
			last_name: extractedFormData.lastName,
			base_language: extractedFormData.baseLanguage,
			target_language: extractedFormData.targetLanguage,
			language_level: extractedFormData.languageLevel,
		})
		.eq("id", userData?.user?.id);

	await Promise.all([
		Array(3).fill(0).map((_) => (
			createStory({
				language: extractedFormData.targetLanguage,
				userId: userData?.user?.id as UUID,
				storyPromptOptions: {
					learnerLevel:
						extractedFormData.languageLevel as (typeof languageLevels)[number],
					genres: extractedFormData.genres.split(","),
					people: extractedFormData.peopleNames.split(","),
					pets: extractedFormData.petNames.split(","),
					premise: undefined,
					setting: undefined,
				},
			})
		))
	]);

	if (userError || profileError) {
		console.error(
			userError ? `User error: ${userError}` : `Profile error: ${profileError}`,
		);
		redirect("/error");
	}

	// TODO: Restructure to redirect to stories and add skeletons and call story functions after
	revalidatePath("/", "layout");
	redirect("/");
}
