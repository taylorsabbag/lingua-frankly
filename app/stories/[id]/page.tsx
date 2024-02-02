import { getStoryById } from "@/data/stories";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { isUserLoggedIn } from "@/app/auth/actions";

export default async function StoryPage({
	params,
}: { params: { id: string } }) {
	const { data: story, error } = await getStoryById(params.id);
    const user = await isUserLoggedIn()
    const userId = user?.identities?.[0]?.id ?? null;
    if (userId !== story.user_id) {
        redirect('/error')
    }

	return (
		<Card>
            <CardHeader>
                <CardTitle>{story.title}</CardTitle>
                <CardDescription>{story.language}</CardDescription>
                </CardHeader>
            <CardContent>
                {story.content}
            </CardContent>
            <CardFooter>
               <p className="text-sm"><span className="italic">Keywords: </span>{story.keywords}</p>
            </CardFooter>
        </Card>
	);
}
