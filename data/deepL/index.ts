"use server";

const DEEPL_BASE_URL_FREE = "https://api-free.deepl.com/v2/translate";

export default async function getTranslation(
	text: string,
	targetLanguage: string,
) {
	const targetLanguageConversionMap = {
		Arabic: "AR",
		Bulgarian: "BG",
		Czech: "CS",
		Danish: "DA",
		German: "DE",
		Greek: "EL",
		English: "EN",
		Spanish: "ES",
		Estonian: "ET",
		Finnish: "FI",
		French: "FR",
		Hungarian: "HU",
		Indonesian: "ID",
		Italian: "IT",
		Japanese: "JA",
		Korean: "KO",
		Lithuanian: "LT",
		Latvian: "LV",
		Dutch: "NL",
		Polish: "PL",
		Portuguese: "PT",
		Romanian: "RO",
		Russian: "RU",
		Slovak: "SK",
		Slovenian: "SL",
		Swedish: "SV",
		Thai: "TH",
		Turkish: "TR",
		Chinese: "ZH",
	} as const;
	const deepLTargetLangAbbreviation =
		targetLanguageConversionMap[
			targetLanguage as keyof typeof targetLanguageConversionMap
		];
	try {
		if (!deepLTargetLangAbbreviation) {
			throw new Error(`Invalid target language: ${targetLanguage}`);
		}

		const response = await fetch(DEEPL_BASE_URL_FREE, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": `DeepL-Auth-Key ${process.env.NEXT_PUBLIC_DEEPL_API_KEY}`,
			},
			method: "POST",
			body: JSON.stringify({
				text: [text],
				target_lang: deepLTargetLangAbbreviation,
			}),
		});
		const json = await response.json();
		return json.translations[0].text;
	} catch (error) {
		console.error(error);
	}
}
