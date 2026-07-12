"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

interface Props {
  text: string;
  sender: "user" | "ai";
}

export default function MessageBubble({ text, sender }: Props) {
  const isUser = sender === "user";
  const [copied, setCopied] = useState(false);

  async function copyText() {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div
      className={`flex mb-8 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="mr-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
            🤖
          </div>
        </div>
      )}

      <div
        className={`relative max-w-[78%] rounded-3xl shadow-md ${
          isUser
            ? "bg-gradient-to-r from-[#7C5CFC] to-[#6A5AF9] text-white rounded-br-md"
            : "bg-white border border-orange-100 rounded-bl-md"
        }`}
      >
        {!isUser && (
          <button
            onClick={copyText}
            className="absolute right-4 top-4 hover:text-orange-500 transition"
          >
            {copied ? (
              <Check size={18} />
            ) : (
              <Copy size={18} />
            )}
          </button>
        )}

        <div className="px-6 py-5">
          {isUser ? (
            <p className="whitespace-pre-wrap leading-7">
              {text}
            </p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  const { children, className, ...rest } = props;
                  const match = /language-(\w+)/.exec(
                    className || ""
                  );

                  return match ? (
                    <SyntaxHighlighter
                      style={oneLight}
                      language={match[1]}
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className="bg-orange-100 rounded px-1 py-0.5"
                      {...rest}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {text}
            </ReactMarkdown>
          )}
        </div>
      </div>

      {isUser && (
        <div className="ml-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
            👤
          </div>
        </div>
      )}
    </div>
  );
}