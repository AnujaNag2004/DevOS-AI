"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-10">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
              AI Engineering Workspace
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-tight">

              Build.

              <br />

              Debug.

              <br />

              Deploy.

              <br />

              <span className="text-blue-500">
                Faster with AI.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-400">

              DevOS AI helps developers review code,
              debug projects, generate documentation,
              manage tasks and collaborate with AI Agents
              inside one intelligent workspace.

            </p>

            <div className="mt-10 flex gap-6">

              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
                Get Started
              </button>

              <button className="rounded-xl border border-gray-700 px-8 py-4 transition hover:bg-gray-900">
                Watch Demo
              </button>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="rounded-3xl border border-gray-800 bg-white/5 p-8 backdrop-blur-xl">

              <h2 className="text-2xl font-bold">
                AI Workspace
              </h2>

              <div className="mt-8 space-y-5">

                <div className="rounded-xl bg-gray-900 p-5">
                  ✅ Reviewing Project...
                </div>

                <div className="rounded-xl bg-gray-900 p-5">
                  🧠 Debugging Errors...
                </div>

                <div className="rounded-xl bg-gray-900 p-5">
                  📄 Generating Documentation...
                </div>

                <div className="rounded-xl bg-gray-900 p-5">
                  🚀 Deployment Ready
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}