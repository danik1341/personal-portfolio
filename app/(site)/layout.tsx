import Link from "next/link";
import "../globals.css";
import Image from "next/image";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Stay Awhile And Listen",
  description: "Generated by Next and Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //get all pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            <Image
              src="/images/BlackLogo.svg"
              alt="logo"
              width={91}
              height={63}
            />
          </Link>

          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
