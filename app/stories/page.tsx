import { isUserLoggedIn } from "@/app/auth/actions";
import { getAllStoriesByUserId } from "@/data/stories";
import { PostgrestError } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import StoriesList from "./storyList";

export default async function Page() {
	const user = await isUserLoggedIn();
	const userId = user?.identities?.[0]?.id ?? null;
	if (userId == null) {
		redirect("/");
	}
	const { data, error } = (await getAllStoriesByUserId(userId)) as {
		data: any[] | null;
		error: PostgrestError | null;
	};
	if (error) {
		console.error(error);
	}
	return (
		<>
			<StoriesList data={data} />
		</>
	);
}
