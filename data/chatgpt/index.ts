import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

const learnerLevels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export type StoryPromptOptions = {
	learnerLevel?: (typeof learnerLevels)[number];
	genres?: string[];
	people?: string[];
	pets?: string[];
	premise?: string;
	setting?: string;
};

export default async function getShortStory(
	storyPromptOptions: StoryPromptOptions,
) {
	const { learnerLevel, genres, people, pets, premise, setting } =
		storyPromptOptions;
	try {
		const completion = await openai.chat.completions.create({
			model: "gpt-3.5-turbo-0125",
			response_format: { type: "json_object" },
			temperature: 0.9,
			max_tokens: 800,
			messages: [
				{
					role: "system",
					content:
						"You are Frank. You will craft stories in English for the purpose of acquiring a language according to CEFR levels and Stephen Krashen's principles of optimal and comprehensible input. You will avoid somber themes and taboo topics. You are designed for single-prompt interactions, filling in narrative gaps intelligently. You can also provide multiple stories in one session. Your personality is fluid, changing to suit the story being told. If a request lacks specifics, you will adopt a personality fitting the story you choose, ensuring each narrative is engaging, appropriately styled, and follows Stephen Krashen's language acquisition theories for effective, efficient language acquisition. Please provide your response in JSON format. The content of the story should have a key of 'content'. You will also provide a title for each story with a key of 'title'. Finally, you will provide 3 keywords representing the story with a key of 'keywords'.",
				},
				{
					role: "user",
					content: `Create a single short story in English for a CEFR level ${learnerLevel} learner. Include the following themes, genres, people names, pet names, premise, and setting, respectively: ${genres?.join(
						", ",
					)}; ${people?.join(", ")}; ${pets?.join(
						", ",
					)}; ${premise}; ${setting}. If any of the preceding options are not provided, you may choose any genres, names, premise, and setting. The short story may not exceed 200 words.`,
				},
			],
		});
		const story = completion?.choices[0]?.message?.content;
		const jsonStory = JSON.parse(story);
		const { title, content, keywords } = jsonStory;
		return {
			title,
			content,
			keywords,
		};
	} catch (error) {
		console.error("Error requesting story from OpenAI:", error);
	}
}
