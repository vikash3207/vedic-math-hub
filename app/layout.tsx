import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Vedic Math Hub",
  description: "Learn Vedic Mathematics with simple steps and visuals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Top Navigation */}
        <header className="border-b">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-lg font-bold">
              Vedic Math Hub
            </Link>

            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/vedic-mathematics" className="hover:underline">
                Vedic Mathematics
              </Link>
              <Link href="/tips" className="hover:underline">
                Tips & Tricks
              </Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
