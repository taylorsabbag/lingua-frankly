"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createStory } from "@/data/stories/index.ts"

import { createClient } from "@/utils/supabase/actions";
import { UUID } from "crypto";

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

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
    console.error(error)
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
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

  const languageLevels = [
    'A1',
    'A2',
    'B1',
    'B2',
    'C1',
    'C2',
  ] as const;
  const languageLevelSchema = z.enum([...languageLevels])

	const languageSchema = z.enum([...languages]);
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
	};

	const result = formDataSchema.safeParse(extractedFormData);
	if (!result.success) {
		console.error(result.error);
		return;
	}

	const { data: userData, error: userError } =
		await supabase.auth.signUp({email: extractedFormData.email, password: extractedFormData.password});
	const { error: profileError } = await supabase
		.from("profiles")
		.update({
			email: extractedFormData.email,
			first_name: extractedFormData.firstName,
			last_name: extractedFormData.lastName,
			base_language: extractedFormData.baseLanguage,
			target_language: extractedFormData.targetLanguage,
      language_level: extractedFormData.languageLevel
		}).eq('id', userData?.user?.id)

  const newUserStories = await Promise.all([
    createStory({ language: extractedFormData.targetLanguage, userId: userData?.user?.id as UUID, storyPromptOptions: {
      learnerLevel: extractedFormData.languageLevel as typeof languageLevels[number],
      genres: ['Adventure'],
      people: ['Abigail', "John"],
      pets: ['Theo', 'Kaileigh'],
      premise: 'A trip to the park',
      setting: 'A park in the Netherlands',
    }}),
    createStory({ language: extractedFormData.targetLanguage, userId: userData?.user?.id as UUID, storyPromptOptions: {
      learnerLevel: extractedFormData.languageLevel as typeof languageLevels[number],
      genres: ['Romance'],
      people: ['Becca', 'Taylor'],
      premise: 'A first date at a bar with a golf simulator',
      setting: 'A golf-themed bar'
    }}),
    createStory({language: extractedFormData.targetLanguage, userId: userData?.user?.id as UUID, storyPromptOptions: {
      learnerLevel: extractedFormData.languageLevel as typeof languageLevels[number],
      genres: ['Mystery'],
      people: ['Detective Smith', 'Suspect'],
      premise: 'A murder was committed at Saltburn Manor.',
      setting: 'The stately Saltburn Manor in England'
    }})
  ])

	if (userError || profileError) {
    console.error(userError ? `User error: ${userError}` : `Profile error: ${profileError}`)
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}
