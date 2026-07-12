"use client";

import { useState } from "react";

import API from "@/services/api";

import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

interface Message {
  text: string;
  sender: "user" | "ai";
}

interface Props {
  onChatSaved?: () => void;
}

export default function ChatBox({
  onChatSaved,
}: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const userMessage = message;

    const updatedMessages: Message[] = [
      ...messages,
      {
        text: userMessage,
        sender: "user",
      },
    ];

    setMessages(updatedMessages);

    setMessage("");

    setLoading(true);

    try {
      const response = await API.post("/chat", {
        message: userMessage,
      });

      const finalMessages: Message[] = [
        ...updatedMessages,
        {
          text: response.data.reply,
          sender: "ai",
        },
      ];

      setMessages(finalMessages);

      await API.post("/history", {
        messages: finalMessages,
      });

      if (onChatSaved) {
        onChatSaved();
      }

    } catch (error) {

      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          text: "❌ Something went wrong.",
          sender: "ai",
        },
      ]);

    }

    setLoading(false);
  }

  return (
    <div className="bg-white rounded-[30px] shadow-xl border border-orange-100 p-7">

      {/* Header */}

      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
          🤖
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            DevOS AI Assistant
          </h2>

          <p className="text-gray-500">
            Your intelligent coding partner
          </p>

        </div>

      </div>

      <ChatWindow
        messages={messages}
        loading={loading}
      />

      <ChatInput
        value={message}
        loading={loading}
        onChange={setMessage}
        onSend={sendMessage}
      />

    </div>
  );
}