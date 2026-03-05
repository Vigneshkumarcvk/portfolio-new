import "./globals.css";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">

        <nav className="p-6 flex justify-between border-b border-gray-700">
          <h1 className="font-bold text-xl">Dr. Vignesh Kumar C</h1>

          <div className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/research">Research</Link>
            <Link href="/certifications">Certfications</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}