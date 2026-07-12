"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Terminal,
  Code2,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function Showcase() {
  return (
    <section className="bg-black px-8 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-500 font-semibold">
            AI Workspace
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Your Entire Development Workflow
            <br />
            Inside One Platform
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Review code, debug applications, generate documentation,
            collaborate with AI agents and monitor projects from a single dashboard.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left Panel */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-800 bg-[#111] p-8"
          >

            <div className="mb-6 flex items-center gap-3">
              <Code2 className="text-blue-500" />
              <h3 className="text-xl font-semibold">
                AI Code Review
              </h3>
            </div>

            <div className="rounded-xl bg-black p-6 font-mono text-sm text-green-400">

{`function login(){
  if(user){
     redirect("/dashboard")
  }
}`}

            </div>

            <div className="mt-6 rounded-xl bg-blue-950/40 p-5">
              <CheckCircle className="inline mr-2 text-green-400" />
              AI Suggestion:
              <p className="mt-2 text-gray-300">
                Consider validating the session before redirecting.
              </p>
            </div>

          </motion.div>

          {/* Right Panel */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="rounded-3xl border border-gray-800 bg-[#111] p-6">

              <div className="flex items-center gap-3">
                <Bot className="text-blue-500" />
                <h3 className="font-semibold text-xl">
                  AI Assistant
                </h3>
              </div>

              <p className="mt-5 text-gray-400">
                ✔ Code Explanation
              </p>

              <p className="mt-2 text-gray-400">
                ✔ Bug Detection
              </p>

              <p className="mt-2 text-gray-400">
                ✔ Refactoring Suggestions
              </p>

              <p className="mt-2 text-gray-400">
                ✔ Best Practices
              </p>

            </div>

            <div className="rounded-3xl border border-gray-800 bg-[#111] p-6">

              <div className="flex items-center gap-3">
                <Terminal className="text-blue-500" />
                <h3 className="font-semibold text-xl">
                  Smart Terminal
                </h3>
              </div>

              <div className="mt-5 rounded-lg bg-black p-4 font-mono text-green-400">

$ npm run build

<br />

✔ Build Successful

<br />

✔ Ready for Deployment

              </div>

            </div>

            <div className="rounded-3xl border border-gray-800 bg-[#111] p-6">

              <div className="flex items-center gap-3">
                <FileText className="text-blue-500" />
                <h3 className="font-semibold text-xl">
                  Documentation
                </h3>
              </div>

              <p className="mt-4 text-gray-400">
                AI automatically generates project documentation,
                README files and API references.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}