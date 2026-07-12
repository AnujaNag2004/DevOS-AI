import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              DevOS <span className="text-blue-500">AI</span>
            </h2>

            <p className="mt-4 text-gray-400">
              The AI Operating System for Developers.
              Build, Debug, Deploy and Scale faster with AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#features" className="hover:text-blue-500">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="#">
                  AI Workspace
                </Link>
              </li>

              <li>
                <Link href="#">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#">
                  Documentation
                </Link>
              </li>

              <li>
                <Link href="#">
                  API
                </Link>
              </li>

              <li>
                <Link href="#">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="#">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#">
                  About
                </Link>
              </li>

              <li>
                <Link href="#">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="#">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
          © 2026 DevOS AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}