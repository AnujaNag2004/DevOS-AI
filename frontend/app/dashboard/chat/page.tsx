"use client";

import { useState } from "react";
import API from "@/services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await API.post("/ai/chat", {
        message,
      });

      setReply(res.data.reply);
    } catch (error) {
      console.error(error);
      setReply("❌ Unable to contact DevOS AI.");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-7xl mx-auto py-10">

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold mb-2">
          🤖 DevOS AI Assistant
        </h1>

        <p className="text-gray-500 mb-8">
          Ask coding, debugging, AI, DSA, Web Development or interview questions.
        </p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything..."
          className="w-full h-48 border rounded-2xl p-5 resize-none outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold"
        >
          {loading ? "Thinking..." : "Ask DevOS AI"}
        </button>

        {reply && (
          <div className="mt-10 bg-gray-50 border rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              AI Response
            </h2>

            <div className="prose max-w-none">

              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {reply}
              </ReactMarkdown>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}