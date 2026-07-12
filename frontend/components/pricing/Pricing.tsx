"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "Free",
    description: "Perfect for students and beginners.",
    features: [
      "AI Chat",
      "5 Code Reviews / Day",
      "Basic Debugging",
      "Community Support",
    ],
    featured: false,
  },
  {
    title: "Pro",
    price: "₹499/mo",
    description: "Best for developers building real projects.",
    features: [
      "Unlimited AI Chat",
      "Unlimited Code Reviews",
      "GitHub Analyzer",
      "Resume Analyzer",
      "Priority Support",
    ],
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For startups and engineering teams.",
    features: [
      "Unlimited Everything",
      "Team Dashboard",
      "Project Analytics",
      "Dedicated Support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-black py-28 px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-blue-500 font-semibold">
            PRICING
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Choose Your Plan
          </h2>

          <p className="mt-6 text-gray-400">
            Start free and upgrade whenever you're ready.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`rounded-3xl border p-8 transition hover:-translate-y-2 ${
                plan.featured
                  ? "border-blue-500 bg-blue-950/20"
                  : "border-gray-800 bg-white/5"
              }`}
            >
              {plan.featured && (
                <div className="mb-6 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <p className="mt-4 text-5xl font-bold text-blue-500">
                {plan.price}
              </p>

              <p className="mt-4 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <Check
                      className="text-green-500"
                      size={18}
                    />

                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700">
                Get Started
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}