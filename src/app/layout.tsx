"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-slate-900 text-white overflow-x-hidden">

        {/* NAVBAR */}
        <nav className="border-b border-gray-700 px-6 py-4">

          <div className="flex justify-between items-center">

            {/* Logo / Name */}
            <h1 className="font-bold text-lg">
              Dr. Vignesh Kumar C
            </h1>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/research">Research</Link>
              <Link href="/certifications">Certifications</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="flex flex-col mt-4 space-y-3 md:hidden">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/research">Research</Link>
              <Link href="/certifications">Certifications</Link>
              <Link href="/contact">Contact</Link>
            </div>
          )}
        </nav>

        {children}

      </body>
    </html>
  );
}