"use client";

import { useState } from "react";
import API from "@/services/api";
import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";
import {
  Loader2,
  Copy,
  Download,
  Sparkles,
} from "lucide-react";

export default function CodeReviewPage() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    if (!code.trim()) {
      toast.error("Please paste some code first.");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Reviewing your code...");

    try {
      const res = await API.post("/ai/review", {
        code,
      });

      setReview(res.data.reply);

      toast.dismiss(toastId);
      toast.success("Code reviewed successfully!");

    } catch (err) {

      console.error(err);

      toast.dismiss(toastId);
      toast.error("Review failed.");

      setReview("Something went wrong.");

    }

    setLoading(false);
  }

  function copyReview() {
    if (!review) return;

    navigator.clipboard.writeText(review);

    toast.success("Review copied!");
  }

  function downloadReview() {
    if (!review) return;

    const blob = new Blob([review], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "code-review.txt";

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

            <Sparkles className="text-orange-500" />

            <h1 className="text-4xl font-bold">
              AI Code Reviewer
            </h1>

          </div>

          <p className="text-gray-500 mt-2">
            Paste your code and receive a professional AI-powered review.
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
              onClick={reviewCode}
              disabled={loading}
              className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold flex justify-center items-center gap-3 hover:shadow-xl transition"
            >

              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Reviewing...
                </>
              ) : (
                "Review Code"
              )}

            </button>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-7 flex flex-col">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-semibold text-xl">
                AI Review
              </h2>

              <div className="flex gap-3">

                <button
                  onClick={copyReview}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Copy size={18} />
                </button>

                <button
                  onClick={downloadReview}
                  className="p-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition"
                >
                  <Download size={18} />
                </button>

              </div>

            </div>

            <div className="flex-1 h-[630px] overflow-y-auto rounded-2xl bg-gray-50 border border-gray-200 p-6">

              {review ? (

                <div className="prose max-w-none">

                  <ReactMarkdown>

                    {review}

                  </ReactMarkdown>

                </div>

              ) : (

                <div className="h-full flex items-center justify-center text-center">

                  <div>

                    <div className="text-6xl mb-4">
                      🤖
                    </div>

                    <h3 className="text-2xl font-bold">
                      AI Review Ready
                    </h3>

                    <p className="text-gray-500 mt-3">
                      Paste your code on the left and click
                      <strong> Review Code </strong>
                      to receive an in-depth AI analysis.
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