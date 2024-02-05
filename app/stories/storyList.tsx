import { UUID } from "crypto";
import Story from "./story"

export default function StoryList({ data }) {
    return (
        <section className="flex flex-col gap-6">
            {data?.map(({id, language, content, title, keywords}: {id: UUID, language: string, content: string, title: string, keywords: string}) => (
                    <Story key={id} id={id} language={language} content={content} title={title} keywords={keywords} />
            ))}
        </section>
    );
}
