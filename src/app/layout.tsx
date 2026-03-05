import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white overflow-x-hidden">

        <nav className="p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-700 gap-3">

          {/* Name */}
          <h1 className="font-bold text-lg md:text-xl text-center md:text-left">
            Dr. Vignesh Kumar C
          </h1>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/research">Research</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </nav>

        {children}

      </body>
    </html>
  );
}
