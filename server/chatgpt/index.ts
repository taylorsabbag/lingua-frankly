import OpenAI from 'openai';

const openai = new OpenAI(import.meta.env.VITE_OPENAI_API_KEY);

async function main() {
    const completion = await openai.chat.completions.create({
        model: "g-o1TZSpOki-linguafrankly",
        messages: [{
            role: 'user', content: "Create a short story in English."
        }]
    })
}

main()