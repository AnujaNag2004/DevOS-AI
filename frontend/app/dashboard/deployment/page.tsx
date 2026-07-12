"use client";

import { useState } from "react";
import API from "@/services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";

import {
  Rocket,
  Loader2,
  Copy,
  Download,
} from "lucide-react";

export default function DeploymentPage() {
  const [project, setProject] = useState("");
  const [guide, setGuide] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateGuide() {
    if (!project.trim()) {
      toast.error("Please describe your project first.");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Generating deployment guide...");

    try {
      const res = await API.post("/deployment", {
        project,
      });

      setGuide(res.data.reply);

      toast.dismiss(toastId);
      toast.success("Deployment guide generated!");

    } catch (err) {

      console.error(err);

      toast.dismiss(toastId);
      toast.error("Failed to generate deployment guide.");

      setGuide("Something went wrong.");

    }

    setLoading(false);
  }

  function copyGuide() {
    if (!guide) return;

    navigator.clipboard.writeText(guide);

    toast.success("Guide copied!");
  }

  function downloadGuide() {
    if (!guide) return;

    const blob = new Blob([guide], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "deployment-guide.txt";

    a.click();

    URL.revokeObjectURL(url);

    toast.success("Downloaded!");
  }

  return (
    <div className="min-h-screen bg-[#FFF7F2] p-10">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <div className="flex items-center gap-3">

            <Rocket className="text-green-600" />

            <h1 className="text-4xl font-bold">
              AI Deployment Assistant
            </h1>

          </div>

          <p className="text-gray-500 mt-2">
            Describe your project and receive a complete deployment guide powered by AI.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7">

            <h2 className="font-semibold text-xl mb-5">
              Project Description
            </h2>

            <textarea
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Example: MERN Blog with JWT Authentication, MongoDB, Cloudinary and Vercel Deployment..."
              className="w-full h-[550px] rounded-2xl border border-gray-200 bg-gray-50 p-5 resize-none outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={generateGuide}
              disabled={loading}
              className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold flex justify-center items-center gap-3 hover:shadow-xl transition"
            >
              {loading ? (
                <>
                  <Loader2
                    className="animate-spin"
                    size={20}
                  />
                  Generating...
                </>
              ) : (
                "Generate Deployment Guide"
              )}
            </button>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7 flex flex-col">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-semibold text-xl">
                Deployment Guide
              </h2>

              <div className="flex gap-3">

                <button
                  onClick={copyGuide}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Copy size={18} />
                </button>

                <button
                  onClick={downloadGuide}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Download size={18} />
                </button>

              </div>

            </div>

            <div className="flex-1 h-[630px] overflow-y-auto rounded-2xl bg-gray-50 border border-gray-200 p-6">

              {guide ? (

                <div className="prose max-w-none">

                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {guide}
                  </ReactMarkdown>

                </div>

              ) : (

                <div className="h-full flex items-center justify-center">

                  <div className="text-center">

                    <div className="text-6xl mb-4">
                      🚀
                    </div>

                    <h3 className="text-2xl font-bold">
                      Deployment Assistant Ready
                    </h3>

                    <p className="text-gray-500 mt-3">
                      Describe your application and click
                      <strong> Generate Deployment Guide </strong>
                      to receive a step-by-step deployment plan for platforms like Vercel, Render, Netlify, Railway, Docker, or cloud providers.
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}