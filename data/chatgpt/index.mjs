import OpenAI from "openai";

const openai = new OpenAI({ apiKey: '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' });

async function getShortStory() {
	const completion = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [
			{ role: "system", content: "You are a storyteller." },
			{
				role: "user",
				content: "Create a short story in English in less than 1000 words.",
			},
		],
		temperature: 0.9,
		max_tokens: 800,
	});
	return completion.choices[0].message.content
}