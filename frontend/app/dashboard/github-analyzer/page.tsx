"use client";

import { useState } from "react";
import API from "@/services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";

import {
  GitBranch,
  Loader2,
  Copy,
  Download,
} from "lucide-react";

export default function GithubAnalyzer() {
  const [url, setUrl] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!url.trim()) {
      toast.error("Please enter a GitHub repository URL.");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Analyzing repository...");

    try {
      const res = await API.post("/github", {
        url,
      });

      setAnalysis(res.data.reply);

      toast.dismiss(toastId);
      toast.success("Repository analyzed successfully!");

    } catch (err) {

      console.error(err);

      toast.dismiss(toastId);
      toast.error("Unable to analyze repository.");

      setAnalysis("Something went wrong.");

    }

    setLoading(false);
  }

  function copyAnalysis() {
    if (!analysis) return;

    navigator.clipboard.writeText(analysis);

    toast.success("Analysis copied!");
  }

  function downloadAnalysis() {
    if (!analysis) return;

    const blob = new Blob([analysis], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "github-analysis.txt";

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

            <GitBranch className="text-black" />

            <h1 className="text-4xl font-bold">
              GitHub Repository Analyzer
            </h1>

          </div>

          <p className="text-gray-500 mt-2">
            Analyze any public GitHub repository using AI.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7">

            <h2 className="font-semibold text-xl mb-5">
              Repository URL
            </h2>

            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://github.com/facebook/react"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-5 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              onClick={analyze}
              disabled={loading}
              className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold flex justify-center items-center gap-3 hover:shadow-xl transition"
            >

              {loading ? (
                <>
                  <Loader2
                    className="animate-spin"
                    size={20}
                  />

                  Analyzing...

                </>
              ) : (
                "Analyze Repository"
              )}

            </button>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7 flex flex-col">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-semibold text-xl">
                AI Analysis
              </h2>

              <div className="flex gap-3">

                <button
                  onClick={copyAnalysis}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Copy size={18} />
                </button>

                <button
                  onClick={downloadAnalysis}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Download size={18} />
                </button>

              </div>

            </div>

            <div className="flex-1 h-[600px] overflow-y-auto rounded-2xl bg-gray-50 border border-gray-200 p-6">

              {analysis ? (

                <div className="prose max-w-none">

                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                  >
                    {analysis}
                  </ReactMarkdown>

                </div>

              ) : (

                <div className="h-full flex items-center justify-center">

                  <div className="text-center">

                    <div className="text-6xl mb-4">
                      🐙
                    </div>

                    <h3 className="text-2xl font-bold">
                      Repository Analyzer Ready
                    </h3>

                    <p className="text-gray-500 mt-3">
                      Paste a public GitHub repository URL and click
                      <strong> Analyze Repository </strong>
                      to receive an AI-powered project review.
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