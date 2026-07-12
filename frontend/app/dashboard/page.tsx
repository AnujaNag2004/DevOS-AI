"use client";

import { useEffect, useState } from "react";

import API from "@/services/api";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import WelcomeBanner from "@/components/layout/WelcomeBanner";
import RightSidebar from "@/components/layout/RightSidebar";

import ChatBox from "@/components/chat/ChatBox";
import HistorySidebar from "@/components/chat/HistorySidebar";
import FeatureCards from "./FeatureCards";

interface Chat {
  _id: string;
  title: string;
}

export default function DashboardPage() {
  const [history, setHistory] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  // Fetch all chat history
  async function fetchHistory() {
    try {
      const res = await API.get("/history");
      setHistory(res.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  // Open previous chat
  async function openChat(id: string) {
    try {
      setSelectedChat(id);

      const res = await API.get(`/history/${id}`);

      console.log("Opened Chat:", res.data);

      // We will connect this data to ChatBox
      // in the next refactor step.
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen bg-[#FFF7F2]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <Topbar />

        <div className="mt-6">
          <WelcomeBanner />
        </div>
     

        <FeatureCards />



        <div className="grid grid-cols-12 gap-6 mt-8">
        
        </div>
      </main>
    </div>
  );
}