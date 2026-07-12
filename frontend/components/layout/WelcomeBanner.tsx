"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 via-[#ff8b5e] to-pink-500 p-10 text-white shadow-2xl">

      {/* Background Circles */}

      <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>

      <div className="absolute right-28 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>

      <div className="relative flex items-center justify-between">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="flex items-center gap-2 mb-4">

            <Sparkles size={18} />

            <span className="text-sm font-medium tracking-wide uppercase opacity-90">
              AI Powered Developer Workspace
            </span>

          </div>

          <h1 className="text-5xl font-extrabold leading-tight">

            Welcome to
            <br />
            DevOS AI 🚀

          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">

            Review code, fix bugs, generate documentation,
            analyze GitHub repositories and accelerate your
            development workflow—all in one place.

          </p>

          <button className="mt-8 flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-orange-600 shadow-lg transition hover:scale-105">

            Explore Features

            <ArrowRight size={18} />

          </button>

        </div>

        {/* Right */}

        <div className="hidden lg:flex">

          <div className="rounded-3xl bg-white/15 backdrop-blur-md p-8 border border-white/20">

            <div className="text-6xl text-center">
              🤖
            </div>

            <h3 className="mt-4 text-center text-xl font-bold">
              DevOS AI
            </h3>

            <p className="mt-2 text-center text-sm opacity-90">
              Your intelligent coding companion
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}