"use server";

import { UUID } from "crypto";
import getShortStory, { StoryPromptOptions } from "@/data/chatgpt";
import getTranslation from "@/data/deepL";
import { createClient } from "@/utils/supabase/actions";
import { cookies } from "next/headers";

export type StoryRequest = {
	language: string;
	userId: UUID;
	storyPromptOptions: StoryPromptOptions;
};

async function getAllStoriesByUserId(userId: string) {
	const cookiesStore = cookies();
	const supabase = createClient(cookiesStore);
	try {
		const { data, error } = await supabase
			.from("stories")
			.select("*")
			.eq("user_id", userId);
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

async function getStoryById(storyId: string) {
	const cookiesStore = cookies();
	const supabase = createClient(cookiesStore);
	try {
		const { data, error } = await supabase
			.from("stories")
			.select("*")
			.eq("id", storyId)
			.single();
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

async function createStory(storyRequest: StoryRequest) {
	const cookiesStore = cookies();
	const supabase = createClient(cookiesStore);

	const { language, userId, storyPromptOptions }: StoryRequest = storyRequest;
	try {
		const { title, content, keywords } =
			await getShortStory(storyPromptOptions);
		const translatedStory = await getTranslation(content, language);
		const translatedTitle = await getTranslation(title, language);

		const { data, error } = await supabase.from("stories").insert({
			title: translatedTitle,
			content: translatedStory,
			keywords,
			language,
			user_id: userId,
		});
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

export { getAllStoriesByUserId, getStoryById, createStory };
