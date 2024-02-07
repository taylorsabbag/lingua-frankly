"use server";

import { createClient } from "@/utils/supabase/actions";
import { cookies } from "next/headers";

const cookiesStore = cookies();
const supabase = createClient(cookiesStore);

async function getUserByEmail(email: string) {
	try {
		const { data, error } = await supabase
			.from("profiles")
			.select("*")
			.eq("email", email)
			.single();
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

async function getUserById(id: string) {
	try {
		const { data, error } = await supabase
			.from("profiles")
			.select("*")
			.eq("id", id)
			.single();
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

export { getUserByEmail, getUserById };
