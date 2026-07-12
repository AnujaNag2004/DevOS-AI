"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is DevOS AI free?",
    answer: "Yes! A free plan is available with essential AI features.",
  },
  {
    question: "Which AI models are supported?",
    answer: "Gemini, OpenAI GPT, Claude and future open-source models.",
  },
  {
    question: "Can I analyze GitHub repositories?",
    answer: "Yes. Simply paste a GitHub repository link and receive AI insights.",
  },
  {
    question: "Is my project data secure?",
    answer: "Absolutely. Authentication is handled securely using JWT and encrypted passwords.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-28 px-8 text-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center">

          <p className="text-blue-500 font-semibold">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-white/5"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}