"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Account Created Successfully 🎉");
      router.push("/login");
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F2] px-6">

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-orange-300 blur-[120px] opacity-40"></div>

      <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-teal-300 blur-[120px] opacity-40"></div>

      <div className="relative w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl border border-stone-200 shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-stone-800">
          Create Account
        </h1>

        <p className="mt-3 text-stone-500">
          Join DevOS AI today 🚀
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-8 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#FF7A59]"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-5 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#FF7A59]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-5 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#FF7A59]"
        />

        <button
          onClick={handleRegister}
          className="mt-8 w-full rounded-xl bg-[#FF7A59] p-4 text-white font-semibold transition hover:scale-105 hover:bg-[#ff6945]"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-stone-500">
          Already have an account?
          <span
            onClick={() => router.push("/login")}
            className="ml-2 cursor-pointer font-semibold text-[#FF7A59]"
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}