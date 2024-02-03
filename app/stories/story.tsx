import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Story({ id, content, language, title }) {
	return (
		<Link href={`/stories/${id}`}>
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{language}</CardDescription>
				</CardHeader>
				<CardContent className="line-clamp-3 mb-6">
					{content}
				</CardContent>
				{/* <CardFooter className="pb-0">
					Keywords: {keywords}
				</CardFooter> */}
			</Card>
		</Link>
	);
}
