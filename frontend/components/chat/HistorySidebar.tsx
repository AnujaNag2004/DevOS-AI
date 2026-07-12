"use client";

import API from "@/services/api";
import { Trash2 } from "lucide-react";

interface Chat {
  _id: string;
  title: string;
}

interface Props {
  chats: Chat[];
  selectedChat: string | null;
  onSelect: (id: string) => void;
  onDelete: () => void;
}

export default function HistorySidebar({
  chats,
  selectedChat,
  onSelect,
  onDelete,
}: Props) {

  async function deleteChat(id: string) {
    try {
      await API.delete(`/history/${id}`);

      onDelete();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-72 bg-white rounded-3xl shadow-xl p-6 border border-orange-100">

      <h2 className="font-bold text-xl mb-5">
        💬 Chat History
      </h2>

      {chats.length === 0 ? (
        <p className="text-gray-400 text-sm">
          No chats available.
        </p>
      ) : (
        <div className="space-y-3">

          {chats.map((chat) => (

            <div
              key={chat._id}
              className={`flex items-center justify-between rounded-xl p-3 transition cursor-pointer ${
                selectedChat === chat._id
                  ? "bg-orange-100"
                  : "hover:bg-orange-50"
              }`}
            >

              <button
                onClick={() => onSelect(chat._id)}
                className="flex-1 text-left truncate"
              >
                {chat.title}
              </button>

              <Trash2
                size={18}
                className="text-red-500 hover:text-red-700 ml-3"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat._id);
                }}
              />

            </div>

          ))}

        </div>
      )}

    </div>
  );
}