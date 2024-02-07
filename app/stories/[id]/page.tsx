import { isUserLoggedIn } from "@/app/auth/actions";
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getStoryById } from "@/data/stories";
import { PostgrestError } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export default async function StoryPage({
	params,
}: { params: { id: string } }) {
	const { data: story, error } = await getStoryById(params.id) as { data: any; error: PostgrestError | null };
	const user = await isUserLoggedIn();
	const userId = user?.identities?.[0]?.id ?? null;
	if (userId !== story.user_id) {
		redirect("/error");
	}

	return (
		<Card className="max-w-[70ch]">
			<CardHeader>
				<CardTitle>{story.title}</CardTitle>
				<CardDescription>{story.language}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{story.content}</p>
			</CardContent>
			<CardFooter>
				<div className="text-sm flex gap-2 flex-wrap flex-col sm:flex-row items-start">
					<span className="italic">Keywords: </span>
					{story.keywords
						.substring(1, story.keywords.length - 1)
						.split(",")
						.map((str: string, i: number) => (
							<Badge
								key={`${str}-${i}`}
								variant="outline"
								className="hover:text-white hover:bg-black"
							>
								{str.substring(1, str.length - 1)}
							</Badge>
						))}
				</div>
			</CardFooter>
		</Card>
	);
}
