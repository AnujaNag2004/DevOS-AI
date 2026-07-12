"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const points = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Development",
    text: "Code smarter using intelligent AI agents for every development task.",
  },
  {
    icon: Code2,
    title: "Developer First",
    text: "Everything is designed specifically for developers and engineering teams.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    text: "JWT authentication, encrypted passwords and protected APIs.",
  },
  {
    icon: Sparkles,
    title: "Modern Experience",
    text: "Beautiful UI inspired by Vercel, Linear and Cursor AI.",
  },
];

export default function Why() {
  return (
    <section
      id="about"
      className="bg-[#050505] py-24 px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          viewport={{once:true}}
          className="text-center"
        >
          <p className="text-blue-500 font-semibold">
            WHY DEVOS AI
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            More Than Just
            <br />
            Another AI Chatbot
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            DevOS AI combines multiple developer tools into one
            intelligent workspace so you can focus on building,
            not switching between apps.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-20 md:grid-cols-2">

          {points.map((item,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*0.15}}
              viewport={{once:true}}
              className="rounded-3xl border border-gray-800 bg-white/5 p-8"
            >
              <item.icon
                className="text-blue-500"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}