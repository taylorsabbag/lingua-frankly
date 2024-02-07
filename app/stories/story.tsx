import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Story({ id, content, language, title, keywords }: { id: string, content: string, language: string, title: string, keywords: string }) {
	return (
		<Link href={`/stories/${id}`}>
			<Card className="max-w-[70ch]">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{language}</CardDescription>
				</CardHeader>
				<CardContent className="line-clamp-3 py-0">
					<p>{content}</p>
				</CardContent>
				<CardFooter className="my-6 pb-0">
					<div className="text-sm flex gap-2 flex-wrap flex-col sm:flex-row items-start">
						<span className="italic">Keywords: </span>
						{keywords
							.substring(1, keywords.length - 1)
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
		</Link>
	);
}
