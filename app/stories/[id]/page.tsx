import { getStoryById } from "@/data/stories";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { redirect } from "next/navigation";
import { isUserLoggedIn } from "@/app/auth/actions";

export default async function StoryPage({
	params,
}: { params: { id: string } }) {
	const { data: story, error } = await getStoryById(params.id);
	const user = await isUserLoggedIn();
	const userId = user?.identities?.[0]?.id ?? null;
	if (userId !== story.user_id) {
		redirect("/error");
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>{story.title}</CardTitle>
				<CardDescription>{story.language}</CardDescription>
			</CardHeader>
			<CardContent>{story.content}</CardContent>
<CardFooter>
    <div className="text-sm flex gap-2">
        <span className="italic">Keywords: </span>
        {story.keywords
            .substring(1, story.keywords.length - 1)
            .split(",")
            .map((str: string, i: number) => (
                <Badge key={`${str}-${i}`} variant="outline" className="hover:text-white hover:bg-black">
                    {str.substring(1, str.length - 1)}
                </Badge>
            ))}
    </div>
</CardFooter>
		</Card>
	);
}
