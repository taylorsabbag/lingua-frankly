import { createStory } from "@/data/stories/index";

const storyRequestParts = [
    {
    languages: ["Spanish", "Dutch", "French", "Japanese", "Chinese", "Russian", "German"],
    },
    {
        userId: "b65a7656-e14a-4df5-9451-f8a7e1546d17",
    },
    {
       storyOptions: [
            {
                genres: ["Adventure", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Comedy"],
                people: ["Joe", "Miranda", "Alex", "Samantha", "Michael", "Sarah", "John"],
                pets: ["Spot", "Fluffy", "Rex", "Whiskers", "Lucky", "Buddy", "Mittens"],
                premises: ["A haunted house", "A magical forest", "A space station", "A secret lab", "A hidden cave", "A deserted island", "A bustling city"],
            },
        ],
    }
]

const numRequests = 10
// A function that returns an array of story requests. Each request is an object with the following properties:
// - language: one of the languages in the languages array
// - userId: the userId
// - storyOptions: an object with the following properties:
//   - genre: two to three of the genres in the genres array
//   - people: two to three of the people in the people array
//   - pets: one to two of the pets in the pets array
//   - premise: one of the premises in the premises array
// The number of requests is determined by the numRequests parameter.
const storyRequests = (numRequests, storyRequestParts) => {
    const requests = []
    for (let i = 0; i < numRequests; i++) {
        const request = {}
        request.languages = storyRequestParts[0].languages[Math.floor(Math.random() * storyRequestParts[0].languages.length)]
        request.userId = storyRequestParts[1].userId
        request.storyOptions = {}
        request.storyOptions.genres = []
        request.storyOptions.people = []
        request.storyOptions.pets = []
        request.storyOptions.premise = storyRequestParts[2].storyOptions[0].premises[Math.floor(Math.random() * storyRequestParts[2].storyOptions[0].premises.length)]
        for (let j = 0; j < 3; j++) {
            request.storyOptions.genres.push(storyRequestParts[2].storyOptions[0].genres[Math.floor(Math.random() * storyRequestParts[2].storyOptions[0].genres.length)])
            request.storyOptions.people.push(storyRequestParts[2].storyOptions[0].people[Math.floor(Math.random() * storyRequestParts[2].storyOptions[0].people.length)])
            request.storyOptions.pets.push(storyRequestParts[2].storyOptions[0].pets[Math.floor(Math.random() * storyRequestParts[2].storyOptions[0].pets.length)])
        }
    }
    return requests
}

const createdStories = await Promise.all(storyRequests(numRequests, storyRequestParts).map(createStory))