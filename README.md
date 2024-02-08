# LinguaFrankly

![](/assets/lingua_frank.png)
*Meet Frank - Frank Ontmoeten - לפגוש את פרנק - 
프랭크를 만나보세요 - 
Rencontrez Frank*

## Table of Contents

- [Overview](#overview)
  - [Problem](#problem)
  - [Features](#features)
  - [Usage](#usage)
- [Implementation](#implementation)
  - [Tech Stack](#tech-stack)
  - [External APIs](#external-apis)
- [Installation](#installation)
  - [Developer Environment](#developer-environment)
  - [Production Environment](#production-environment)
  - [API References](#api-references)
- [Screenshots](#screenshots)
- [Lessons Learned](#lessons-learned)
- [Next Steps](#next-steps)

## Overview

LinguaFrankly, skilled in multilingual storytelling, crafts stories in various languages according to the European CEFR levels of language comprehension and Stephen Krashen's principles of optimal input to maximize language acquisition through natural, fun, and engaging means.

### Problem

Learning languages is hard. Not least of which because everyone wants to sell you their amazing(TM) new techniques. Cheaper apps, like Duolingo, are fun, but gamification can only get you so far. At a certain point, many have complained that they're "playing" Duolingo only for the game, not for the languages being learned. What if *learning* was the problem?

Maybe you've heard that children, especially children below the age of 3, learn languages incredibly quickly and incredibly easily. If only you could learn like that. However, would you be interested to know that they're not learning languages at all? In fact, they're *acquiring* them.

Humans are amazing. We don't learn language like we learn other things. We have a mechanism between and within the neurons of our brains that allow us to pick up language from birth. Most of the time, we don't think about our words before we speak. We have an idea of what we want to say, and we simply produce the utterances needed to convey meaning, almost as if by magic.

But it's not magic. Well, it is a little bit. Yet it's actually understood more than people may think. Stephen Krashen and other researchers have spent the last 30+ years producing some of the most effective research on language acquisition that has ever been done. If you're wondering why you haven't heard of it, it's likely because it's not an easy idea to sell. I mean that literally: it's hard to make money on the truth in this case.

That truth is this: the *most* effective way of acquiring language researchers have ever discovered, bar none, is **optimal input**. Composed of only a few simple principals, the "optimal input hypothesis" suggests that it is not by speaking or writing that we develop literacy and acquire language, but through understanding what we see, hear, and read. To start with, optimal input is comprehensible: between 50-70% of the vocabulary, grammar, and overall meaning of a video or text should be understood. It is also compelling: you should actually be interested in what you're reading. And finally, and most relevantly to LinguaFrankly, optimal input is capital-A **Abundant**. Language acquirers must have ample opportunities for acquisition, so a great deal of compelling input rich in the language of comprehensible input is required.

Forget about learning. Acquire languages like children do by taking in the world around you one story at a time.

### Features

- Users can sign in to receive new short stories in their target language every day.
- Each short story can be up to 1000 words (between 750-850 tokens via OpenAI's API).
- Free users can receive 1 short story a day.
- Paid users can receive up to 5 short stories a day customized to include genres/themes, people and pets' names, settings, and premises of their choosing.
- Paid users can either decide to receive their short stories automatically, or they can manually provide individual premises for each short story.
- Users can switch their target language and manage other settings on their profile page.

### Usage

1. Create an account by navigating to the auth page via the "Log In" button.
2. Click on the "Register" tab to create a new account if you don't have an existing account. Otherwise, login using your current credentials.
3. Your stories will be generated automatically based on your initial customization inputs, and you will be automatically redirected to the Stories page where your stories will be waiting for you.
4. Every day thereafter, your stories will be automatically created and waiting for you on the "Stories" page (if you have automatic story generation activated). The "Stories" page is only visible after logging in.
5. If automatic story generation is not activated, you can log in and provide individual premises and other customization options for each of up to 5 stories per day.
6. You may navigate to the "Profile" page at any time to change your story and user settings.

## Implementation

### Tech Stack

- TypeScript for type-safety, especially when integrating frameworks and libraries.
- React for the core view and state management framework.
- NextJS is the full-stack meta-framework that powers the internal API and allows for SSR to improve MPA load times, especially first contentful paints and time-to-interactive.
  - The latest version of NextJS is used for its full implementation of modern framework principles, such as: the app router, which allows for dynamic and complex routing; distinction between Client Components and Server Components; server actions for backend data mutation; and overall optimization of various elements.
- Supabase for their database and auth services.
- Tailwind CSS is the only CSS framework included.
  - Used for its ability to increase iteration velocity and to assist in creating an initial design.
- Shadcn/UI for rapid development using headless, yet robustly built and typesafe components.

<div>
  <img src="/assets/react.png" style="width: 100px;" />
  <img src="/assets/shadcn.png" style="width: 100px;" />
  <img src="/assets/supabase.png" style="width: 100px;" />
  <img src="/assets/tailwind.png" style="width: 100px;" />
  <img src="/assets/ts-logo-128.png" style="width: 100px;" />
  <img src="/assets/nextjs.png" style="width: 100px;" />
</div>

### External APIs

- OpenAI's API is utilized for the story generation. A prompt was created to control for consistent content and to allow customization of various parameters, such as the individual's CEFR language comprehension level and the types of stories they'd like to read.
- DeepL's API is utilized for translating the story created into any of its included languages.
  - While OpenAI's models are capable of speaking several languages at the moment, by their and OpenAI's own admission, they do not reach fluency levels of C1 or above in any language consistently other than English.
  - Thus, for now and the foreseeable future given DeepL's specialized machine-learning models for translations, it is recommended, and herein used, to translate responses from OpenAI's models into other languages if integrity of the original messages are to be preserved.

<div>
  <img src="/assets/chatgpt.png" style="width: 100px;">
  <img src="/assets/deepl.png" style="width: 100px;">
</div>
<hr>

_Special Note on Translation Limitations:_ As the original prompt is produced only in English and then translated into other languages, certain idioms, phrases, and words which only exist in other languages are not created and thus will and can never be translated. In other words, while syntactical meaning between languages can be maintained, the ways that people speak in other languages can not be emulated. DeepL is a translator, not an interpreter. Translators simply maintain syntactical meaning as best they can, whilst interpreters can transform the contextual meaning of an idea into another language without worrying about precise 1-to-1 syntactical translation. For example, Koreans use multiple forms of verb conjugation depending on the context of the individuals they're speaking with, but English has no such differences in syntax. Thus, an English phrase translated into Korean will not contain the context needed to translate into the proper forms. DeepL allows for some context to be provided, but its' abilities are limited.

## Installation

### Developer Environment

1. Clone the repository to your local environment using your preferred method.
2. Run `npm install` to install all dependencies.
3. Create an environment file called ".env.local" and ensure it has the following environment variables:
  - NEXT_PUBLIC_OPENAI_API_KEY: Your OpenAI API key.
  - NEXT_PUBLIC_SUPABASE_URL: Your Supabase organization URL.
  - NEXT_PUBLIC_SUPABASE_ANON_KEY: Your Supabase non-RLS permissioned, anonymous API key.
  - NEXT_PUBLIC_DEEPL_API_KEY: Your DeepL API key.

### Production Environment

1. For deploying the app in a production environment, you can either build the NextJS app beforehand or, if you're using a deployment option like Vercel, you can follow their instructions, and they will build the app for you.
  a. If you choose to build the app yourself, you can do so by running the following commands:

```bash
npm run build
npm start
```

### API References

_Note on API References:_ There are no REST or GraphQL endpoints. All data fetching and mutations are handled via internal server components and server actions. As such, the following are merely references to the functions created for accessing and mutating data.

- Supabase
  - In the latest version of Supabase's SDK, it is recommended to use their new @supabase/ssr package for optimal integration with all SSR-capable frameworks.

## Screenshots


## Lessons Learned

- NextJS feels simultaneously like the future of React frameworks and what React was always meant to be. This is reinforced by the clear and close collaboration between the React and NextJS teams.
  - However, there is a significant learning curve for the new mental model of MPA-based, full-stack React development.
    - e.g. learning the client v.s. server component distinction and the boundaries and inheritance they create
  - Once learned, though, creating a NextJS app requires less code and less futzing with footgun-prone hooks like useEffect.
  - Moreover, while adapting one's mental model is a challenge, the NextJS model is overall simpler. For example, when creating a component that fetches data and then renders it, you can declare the component as an async function and write await fetch calls directly inside the body of the function. Or, if you're looking to mutate server-side data on a database, you create the function that does so using native form attributes and intrinsic properties, like `action={serverAction}` and the `FormData` passed via form submission. This feels at once magical and yet more JavaScript-like because it feels like how you'd intuitively want such elements to perform and is also actually more like how they are meant to.
- TypeScript is great for consuming external APIs and for creating libraries and frameworks designed to be consumed. However, for internal APIs, TypeScript's extra code and mental load is not worth its weight on smaller projects owned and contributed by a sole developer.
  - As more developers are added to a project, and/or as more features are added (and thus time and complexity), and/or as more external APIs are consumed, the value of TypeScript will exceed its cost, but it is important to note that it does have a cost on developer time and mental load.
  - There is an argument for TypeScript encouraging better code before errors are encountered, but this has not yet been borne out by research on the (dis)advantages of static v.s. dynamic typing.

## Next Steps

- Allow users to decide whether they want their stories sent to them via email or available via the app.
- Allow users to create individual stories premise by premise.
- Integrate text-to-speech and allow users to select a part of the story and have it be read to them in their base or target language.
- Allow users to select a part of the story and get a translation for just that part to improve complete comprehension.
- Create a means of evaluating users comprehension of the story to ensure that it remains between 50-70% as is optimal.
- Allow users to browse by keyword and search previous stories.
- Create a sharing feature wherein users can share their favourite stories via magical links that allow people to view just the story being shared regardless of whether they've logged in or are authorized to see that story.
- Complete cost analysis and integrate billing for users who wish to pay for the enhanced features.
- Create games that further user engagement and retention\.
- Convert into a PWA for installability and native experience.
- Create a test users can take to discover their initial reading level if they're not already aware.
- Rebuild in SvelteKit for improved developer experience and a more progressive-enhancement-aligned user experience philosophy.
- Implement Redis or another caching storage layer to provide quicker and more efficient storage solutions for daily short stories which then get placed into the more permanent Supabase storage layer.
- Explore alternative database and auth services, like PlanetScale and Clerk.
