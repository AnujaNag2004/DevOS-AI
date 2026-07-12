"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          DevOS <span className="text-blue-500">AI</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-gray-300 font-medium">
          <Link
            href="/"
            className="transition hover:text-blue-500"
          >
            Home
          </Link>

          <Link
            href="#features"
            className="transition hover:text-blue-500"
          >
            Features
          </Link>

          <Link
            href="#pricing"
            className="transition hover:text-blue-500"
          >
            Pricing
          </Link>

          <Link
            href="#about"
            className="transition hover:text-blue-500"
          >
            About
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="rounded-lg border border-gray-700 px-5 py-2 text-white transition hover:bg-gray-900">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}