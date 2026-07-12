"use client";

import { useState } from "react";
import API from "@/services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";

import {
  Loader2,
  Copy,
  Download,
  Wrench,
} from "lucide-react";

export default function BugFixerPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function fixBug() {
    if (!code.trim()) {
      toast.error("Please paste your code first.");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Fixing your code...");

    try {
      const res = await API.post("/ai/fix", {
        code,
      });

      setResult(res.data.reply);

      toast.dismiss(toastId);
      toast.success("Bug fixed successfully!");

    } catch (err) {

      console.error(err);

      toast.dismiss(toastId);
      toast.error("Failed to fix the code.");

      setResult("Something went wrong.");

    }

    setLoading(false);
  }

  function copyResult() {
    if (!result) return;

    navigator.clipboard.writeText(result);

    toast.success("Copied to clipboard!");
  }

  function downloadResult() {
    if (!result) return;

    const blob = new Blob([result], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "bug-fix.txt";

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

            <Wrench className="text-red-500" />

            <h1 className="text-4xl font-bold">
              AI Bug Fixer
            </h1>

          </div>

          <p className="text-gray-500 mt-2">
            Paste your buggy code and let DevOS AI automatically detect and fix issues.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7">

            <h2 className="font-semibold text-xl mb-5">
              Buggy Code
            </h2>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              className="w-full h-[550px] rounded-2xl border border-gray-200 bg-gray-50 p-5 font-mono resize-none outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              onClick={fixBug}
              disabled={loading}
              className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold flex justify-center items-center gap-3 hover:shadow-xl transition"
            >

              {loading ? (
                <>
                  <Loader2
                    className="animate-spin"
                    size={20}
                  />

                  Fixing...

                </>
              ) : (
                "Fix My Code"
              )}

            </button>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7 flex flex-col">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-semibold text-xl">
                AI Solution
              </h2>

              <div className="flex gap-3">

                <button
                  onClick={copyResult}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Copy size={18} />
                </button>

                <button
                  onClick={downloadResult}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Download size={18} />
                </button>

              </div>

            </div>

            <div className="flex-1 h-[630px] overflow-y-auto rounded-2xl bg-gray-50 border border-gray-200 p-6">

              {result ? (

                <div className="prose max-w-none">

                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                  >
                    {result}
                  </ReactMarkdown>

                </div>

              ) : (

                <div className="h-full flex items-center justify-center">

                  <div className="text-center">

                    <div className="text-6xl mb-4">
                      🐞
                    </div>

                    <h3 className="text-2xl font-bold">
                      AI Bug Fixer Ready
                    </h3>

                    <p className="text-gray-500 mt-3">
                      Paste your code and click
                      <strong> Fix My Code </strong>
                      to receive an improved version with detailed explanations.
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