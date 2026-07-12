"use client";

import MessageBubble from "./MessageBubble";

interface Message {
  text: string;
  sender: "user" | "ai";
}

interface Props {
  messages: Message[];
  loading: boolean;
}

export default function ChatWindow({
  messages,
  loading,
}: Props) {
  return (
    <div className="min-h-[420px] max-h-[550px] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#FFF8F2] to-white border border-orange-100 p-6">

      {messages.length === 0 && (

        <div className="flex h-full items-center justify-center">

          <div className="text-center">

            <div className="text-6xl mb-5">
              🤖
            </div>

            <h2 className="text-2xl font-bold mb-3">
              Welcome to DevOS AI
            </h2>

            <p className="text-gray-500">
              Ask anything about coding,
              debugging, AI, DSA or development.
            </p>

          </div>

        </div>

      )}

      {messages.map((msg, index) => (

        <MessageBubble
          key={index}
          text={msg.text}
          sender={msg.sender}
        />

      ))}

      {loading && (

        <MessageBubble
          sender="ai"
          text="DevOS AI is thinking..."
        />

      )}

    </div>
  );
}