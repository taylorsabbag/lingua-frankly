export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
          <section className="py-10 px-4">
            <h1 className="ml-2 mb-4">Stories</h1>
            {children}
          </section>
        </main>
    )
}