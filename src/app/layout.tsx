
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dr. Vignesh Kumar C | Portfolio",
  description: "Enterprise Data & AI Architect Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white overflow-x-hidden">

        {/* NAVBAR */}
        <nav className="p-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 gap-4">

          {/* NAME */}
          <h1 className="font-bold text-xl text-center md:text-left">
            Dr. Vignesh Kumar C
          </h1>

          {/* MENU */}
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

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}

