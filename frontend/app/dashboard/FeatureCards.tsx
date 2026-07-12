"use client";

import Link from "next/link";

import {
  Bot,
  Bug,
  GitBranch,
  FileText,
  Code2,
  Rocket,
} from "lucide-react";

const cards = [
  {
    title: "AI Chat",
    desc: "Talk with DevOS AI",
    icon: Bot,
    color: "from-violet-500 to-indigo-500",
    href: "/dashboard/chat",
  },
  {
    title: "Code Review",
    desc: "Review your code instantly",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    href: "/dashboard/code-review",
  },
  {
    title: "Bug Fixer",
    desc: "Find & fix bugs with AI",
    icon: Bug,
    color: "from-red-500 to-orange-500",
    href: "/dashboard/bug-fixer",
  },
  {
    title: "GitHub Analyzer",
    desc: "Analyze repositories",
    icon: GitBranch,
    color: "from-gray-700 to-black",
    href: "/dashboard/github-analyzer",
  },
  {
    title: "Documentation",
    desc: "Generate documentation",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
    href: "/dashboard/documentation",
  },
  {
    title: "Deployment",
    desc: "Deployment assistant",
    icon: Rocket,
    color: "from-pink-500 to-purple-500",
    href: "/dashboard/deployment",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-3xl bg-white border border-orange-100 p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center text-white shadow-lg`}
            >
              <Icon size={30} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              {card.title}
            </h2>

            <p className="mt-3 text-gray-500">
              {card.desc}
            </p>

            <div className="mt-8 text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
              Open →
            </div>
          </Link>
        );
      })}
    </div>
  );
}