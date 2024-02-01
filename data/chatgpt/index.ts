import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export default async function getShortStory() {
	const completion = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [
			{ role: "system", content: "You are a storyteller." },
			{
				role: "user",
				content: "Tell me a single joke about cats in 25 words or less.",
			},
		],
		temperature: 0.9,
		max_tokens: 800,
	});
	return completion.choices[0].message.content
}