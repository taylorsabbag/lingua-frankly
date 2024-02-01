export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
        // const createdStories = await Promise.all([
        //     createStory({
        //         language: "Spanish",
        //         userId: TEST_USER_ID,
        //         storyParams: null,
        //     }),
        //     createStory({
        //         language: "French",
        //         userId: TEST_USER_ID,
        //         storyParams: null,
        //     }),
        //     createStory({
        //         language: "Japanese",
        //         userId: TEST_USER_ID,
        //         storyParams: null,
        //     }),
        // ])

    return (
        <main className="mx-auto w">
            <h1>Stories</h1>
            {children}
        </main>
    )
}