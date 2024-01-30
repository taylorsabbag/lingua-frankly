import { supabase } from "../supabaseClient";

async function registerNewUser(
	email: string,
	password: string,
	firstName: string,
	lastName: string,
	baseLanguage: string,
	targetLanguage: string,
) {
	try {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
		});
		if (error) return { data, error };
		const { data: profileData, error: profileError } = await supabase
			.from("profiles")
			.insert([
				{
					email,
					first_name: firstName,
					last_name: lastName,
					base_language: baseLanguage,
					target_language: targetLanguage,
				},
			]);
		return { profileData, profileError };
	} catch (err) {
		console.error(err);
	}
}

async function authenticateUserByPassword(email: string, password: string) {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

async function authenticateUserOAuthGoogle() {
	try {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				queryParams: {
					access_type: "offline",
					prompt: "consent",
				},
			},
		});
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

async function authenticateUserOAuthGithub() {
	try {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "github",
		});
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

async function authenticateUserOAuthFacebook() {
	try {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "facebook",
		});
		return { data, error };
	} catch (err) {
		console.error(err);
	}
}

async function signOutUser() {
	try {
		const { error } = await supabase.auth.signOut();
		return { error };
	} catch (err) {
		console.error(err);
	}
}

export {
	registerNewUser,
	authenticateUserByPassword,
	authenticateUserOAuthGoogle,
	authenticateUserOAuthGithub,
	authenticateUserOAuthFacebook,
	signOutUser,
};
