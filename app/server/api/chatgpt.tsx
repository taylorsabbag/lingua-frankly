import OpenAI from "openai";

const openai = new OpenAI(process.env.NEXT_PUBLIC_OPENAI_KEY)

async function getStory() {
    const completion = await openai.chat.completions.create({
        messages: [{role: "system", content: ""}, {role: "user", content: ""}],
        model: "gpt-3.5-turbo"
    })

    return completion.choices[0]
}