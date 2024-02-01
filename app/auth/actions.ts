"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/actions";

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

  const result = formDataSchema.safeParse(data)
	if (!result.success) {
    console.error()
    return
  }
  
	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
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
  const formDataSchema = z
    .object({
      email: z.string().email().min(6).max(40),
      password: z.string().min(6).max(72),
      confirmPassword: z.string().min(6).max(72),
      firstName: z.string().max(30),
      lastName: z.string().max(30),
      baseLanguage: languageSchema,
      targetLanguage: languageSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Please provide matching passwords.",
      path: ["confirmPassword"],
    });
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
  
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    baseLanguage: formData.get("baseLanguage") as string,
    targetLanguage: formData.get("targetLanguage") as string,
  };

  const result = formDataSchema.safeParse(data)
	if (!result.success) {
    console.error(result.error)
    return
  }

	const { error } = await supabase.auth.signUp(data);

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}
