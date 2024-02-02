export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
            <h1 className="ml-2 mb-4">Stories</h1>
            {children}
        </main>
    )
}