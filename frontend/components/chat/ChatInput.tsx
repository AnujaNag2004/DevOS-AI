"use client";

import { KeyboardEvent } from "react";

interface Props {
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  value,
  loading,
  onChange,
  onSend,
}: Props) {
  function handleKeyDown(
    e: KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  }

  return (
    <div className="bg-white rounded-3xl border border-orange-100 p-5 mt-5 shadow">

      <textarea
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="Ask DevOS AI anything..."
        className="w-full h-24 resize-none outline-none"
      />

      <div className="flex justify-end">

        <button
          onClick={onSend}
          disabled={loading}
          className="mt-4 px-7 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

      </div>

    </div>
  );
}