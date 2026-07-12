"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Bot,
  Bug,
  GitBranch,
  FileText,
  Settings,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Bot,
    label: "AI Chat",
    href: "/dashboard/chat",
  },
  {
    icon: Code2,
    label: "Code Review",
    href: "/dashboard/code-review",
  },
  {
    icon: Bug,
    label: "Bug Fixer",
    href: "/dashboard/bug-fixer",
  },
  {
    icon: GitBranch,
    label: "GitHub Analyzer",
    href: "/dashboard/github-analyzer",
  },
  {
    icon: FileText,
    label: "Documentation",
    href: "/dashboard/documentation",
  },
  {
    icon: Rocket,
    label: "Deployment",
    href: "/dashboard/deployment",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-orange-100 px-6 py-8 flex flex-col">

      {/* Logo */}

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">

          <Sparkles className="text-white" size={26} />

        </div>

        <div>

          <h1 className="text-3xl font-extrabold tracking-tight text-stone-800">
            DevOS
          </h1>

          <p className="text-sm text-stone-500">
            AI Developer Suite
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="mt-12 flex-1 space-y-3">

        {items.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300

              ${
                active
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-xl scale-[1.02]"
                  : "text-stone-700 hover:bg-orange-50 hover:translate-x-1"
              }
              `}
            >
              <Icon
                size={22}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span className="font-semibold">
                {item.label}
              </span>

            </Link>
          );
        })}

      </nav>

      {/* Bottom */}

      <div className="mt-8 rounded-3xl bg-gradient-to-br from-orange-500 to-pink-500 p-5 text-white shadow-xl">

        <p className="text-sm opacity-90">
          DevOS AI
        </p>

        <h3 className="text-lg font-bold mt-1">
          Build Faster 🚀
        </h3>

        <p className="text-xs mt-2 opacity-80 leading-5">
          Review, Debug, Analyze & Deploy —
          all from one dashboard.
        </p>

      </div>

    </aside>
  );
}