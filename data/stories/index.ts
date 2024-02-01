"use server"

import { createClient } from "@/utils/supabase/actions";
import { cookies } from "next/headers";
import { UUID } from "crypto";
import getShortStory from "@/data/chatgpt";
import getTranslation from "@/data/deepL";

type Story = {
    language: string;
    userId: UUID;
}

const cookiesStore = cookies();
const supabase = createClient(cookiesStore)

async function getAllStoriesByUserId(userId: string) {
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

async function createStory(storyRequest: Story) {
    const { language, userId, ...storyParams } = storyRequest;
    try {
        const story = await getShortStory()
        const translatedStory = await getTranslation(story as string, language)

        const {data, error} = await supabase.from("stories").insert([
            {
                content: translatedStory,
                language,
                user_id: userId,
            }
        ])
        return {data, error};
    } catch (err) {
        console.error(err);
    }
}

export { getAllStoriesByUserId, getStoryById, createStory };
