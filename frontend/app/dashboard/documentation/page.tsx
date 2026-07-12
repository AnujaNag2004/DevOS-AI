"use client";

import { useState } from "react";
import API from "@/services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";

import {
  FileText,
  Loader2,
  Copy,
  Download,
} from "lucide-react";

export default function DocumentationPage() {
  const [code, setCode] = useState("");
  const [docs, setDocs] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateDocs() {
    if (!code.trim()) {
      toast.error("Please paste your code first.");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Generating documentation...");

    try {
      const res = await API.post("/documentation", {
        code,
      });

      setDocs(res.data.reply);

      toast.dismiss(toastId);
      toast.success("Documentation generated!");

    } catch (error) {

      console.error(error);

      toast.dismiss(toastId);
      toast.error("Failed to generate documentation.");

      setDocs("Something went wrong.");

    }

    setLoading(false);
  }

  function copyDocs() {
    if (!docs) return;

    navigator.clipboard.writeText(docs);

    toast.success("Documentation copied!");
  }

  function downloadDocs() {
    if (!docs) return;

    const blob = new Blob([docs], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "documentation.txt";

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

            <FileText className="text-orange-500" />

            <h1 className="text-4xl font-bold">
              AI Documentation Generator
            </h1>

          </div>

          <p className="text-gray-500 mt-2">
            Generate professional documentation for any source code using AI.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7">

            <h2 className="font-semibold text-xl mb-5">
              Source Code
            </h2>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              className="w-full h-[550px] rounded-2xl border border-gray-200 bg-gray-50 p-5 font-mono resize-none outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              onClick={generateDocs}
              disabled={loading}
              className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold flex justify-center items-center gap-3 hover:shadow-xl transition"
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
                "Generate Documentation"
              )}

            </button>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7 flex flex-col">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-semibold text-xl">
                Generated Documentation
              </h2>

              <div className="flex gap-3">

                <button
                  onClick={copyDocs}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Copy size={18} />
                </button>

                <button
                  onClick={downloadDocs}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Download size={18} />
                </button>

              </div>

            </div>

            <div className="flex-1 h-[630px] overflow-y-auto rounded-2xl bg-gray-50 border border-gray-200 p-6">

              {docs ? (

                <div className="prose max-w-none">

                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {docs}
                  </ReactMarkdown>

                </div>

              ) : (

                <div className="h-full flex items-center justify-center">

                  <div className="text-center">

                    <div className="text-6xl mb-4">
                      📄
                    </div>

                    <h3 className="text-2xl font-bold">
                      Documentation Generator Ready
                    </h3>

                    <p className="text-gray-500 mt-3">
                      Paste your source code and click
                      <strong> Generate Documentation </strong>
                      to receive professional documentation instantly.
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