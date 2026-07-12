"use client";

import {
  BrainCircuit,
  Code2,
  Bot,
  Rocket,
  ShieldCheck,
  Database,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Code Review",
    description:
      "Instantly review your code using AI and receive optimization suggestions.",
  },
  {
    icon: Code2,
    title: "Smart Debugging",
    description:
      "Detect runtime errors, logic mistakes and improve performance automatically.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Chat with an intelligent coding assistant inside your workspace.",
  },
  {
    icon: Rocket,
    title: "One Click Deployment",
    description:
      "Deploy your applications effortlessly with AI-powered deployment pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Security Scanner",
    description:
      "Identify vulnerabilities and security risks before deployment.",
  },
  {
    icon: Database,
    title: "Project Analytics",
    description:
      "Track commits, performance, AI usage and productivity insights.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-black px-8 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Everything You Need
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          A complete AI operating system built for developers,
          students and engineering teams.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-800 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >
              <feature.icon
                size={42}
                className="mb-6 text-blue-500"
              />

              <h3 className="mb-4 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}