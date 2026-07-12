"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Frontend Developer",
    review:
      "DevOS AI completely changed the way I debug React applications. It's like having another senior developer on my team.",
  },
  {
    name: "Sophia Williams",
    role: "Software Engineer",
    review:
      "The AI Code Review feature helped me improve my code quality and reduced debugging time significantly.",
  },
  {
    name: "Daniel Smith",
    role: "Full Stack Developer",
    review:
      "GitHub Repository Analysis is my favorite feature. It instantly finds issues and suggests improvements.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050505] py-28 px-8 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-blue-500 font-semibold">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Loved by Developers
          </h2>

          <p className="mt-6 text-gray-400">
            See why developers choose DevOS AI every day.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-800 bg-white/5 p-8 hover:border-blue-500 transition"
            >

              <div className="flex gap-1 text-yellow-400">
                {[1,2,3,4,5].map((star)=>(
                  <Star key={star} fill="currentColor" size={18}/>
                ))}
              </div>

              <p className="mt-6 text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}