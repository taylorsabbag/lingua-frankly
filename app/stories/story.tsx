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
					{/* {content} */}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
					repudiandae minus, qui magnam laborum harum in rem minima dolorum
					dolorem ducimus commodi autem quis pariatur soluta iste. Odio, obcaecati
					delectus! Ullam quasi debitis amet autem error corrupti perferendis,
					repellendus animi libero eos ut deserunt vitae mollitia laborum
					laudantium nesciunt impedit ipsam? Aliquid asperiores mollitia
					dignissimos ut voluptatum doloremque esse dicta. Aliquid commodi
					obcaecati recusandae ad nihil soluta exercitationem, libero consequatur
					eum, quos ea iste minima alias ipsam earum accusamus perferendis
					explicabo debitis ab ex molestiae. Assumenda neque dolore deleniti
					doloribus?
				</CardContent>
				{/* <CardFooter className="pb-0">
					Keywords: {keywords?.length > 0 ? keywords?.join(", ") : "keywords"}
				</CardFooter> */}
			</Card>
		</Link>
	);
}
