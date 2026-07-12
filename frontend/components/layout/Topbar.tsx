"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-extrabold text-stone-800">
          Welcome Back 👋
        </h1>

        <p className="text-stone-500 mt-2 text-lg">
          Continue building amazing AI-powered projects.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-md border border-orange-100 w-72">

          <Search size={18} className="text-stone-400" />

          <input
            type="text"
            placeholder="Search..."
            className="outline-none flex-1 text-sm bg-transparent"
          />

        </div>

        {/* Notification */}

        <button className="relative bg-white p-4 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition">

          <Bell size={20} />

          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-md border border-orange-100">

          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">

            A

          </div>

          <div>

            <p className="font-semibold text-sm">
              Anuja
            </p>

            <p className="text-xs text-stone-500">
              Developer
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}