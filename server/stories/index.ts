import { UUID } from "crypto";
import { supabase } from "../supabaseClient";

type Story = {
    title: string;
    content: string;
    language: string;
    userId: UUID;
}

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

async function addStory(story: Story) {
    const { title, content, language, userId } = story;
    try {
        const {data, error} = await supabase.from("stories").insert([
            {
                title,
                content,
                language,
                user_id: userId,
            }
        ])
        return {data, error};
    } catch (err) {
        console.error(err);
    }
}

async function addStoryToUser(userId: string, storyId: string) {
    try {
        const {data, error} = await supabase.from("users").insert([

        ])
    }
}

export { getAllStoriesByUserId, getStoryById };
