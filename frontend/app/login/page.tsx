"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";

export default function LoginPage() {

  const router=useRouter();

  const[email,setEmail]=useState("");

  const[password,setPassword]=useState("");

  async function handleLogin(){

    try{

      const res=await API.post("/auth/login",{
        email,
        password,
      });
      

      localStorage.setItem("token",res.data.token);

      localStorage.setItem("user",JSON.stringify(res.data.user));

      router.push("/dashboard");

    }catch(err:any){

      alert(err.response?.data?.message);

    }

  }

  return(

<div className="min-h-screen flex items-center justify-center bg-[#FFF8F2] px-6">

<div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-orange-300 blur-[120px] opacity-40"/>

<div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-teal-300 blur-[120px] opacity-40"/>

<div className="relative w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-stone-200 p-10">

<h1 className="text-4xl font-bold text-stone-800">

Welcome Back 👋

</h1>

<p className="mt-3 text-stone-500">

Login to your DevOS AI Workspace

</p>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="mt-8 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-orange-400"

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="mt-5 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-orange-400"

/>

<button

onClick={handleLogin}

className="mt-8 w-full rounded-xl bg-[#FF7A59] p-4 font-semibold text-white hover:scale-105 duration-300"

>

Login

</button>

<p className="mt-6 text-center text-stone-500">

Don't have an account?

<span

onClick={()=>router.push("/register")}

className="ml-2 cursor-pointer font-semibold text-[#FF7A59]"

>

Register

</span>

</p>

</div>

</div>

  );

}