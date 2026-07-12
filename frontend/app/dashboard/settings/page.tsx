"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/services/api";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

interface UserSettings {
  name: string;
  email: string;
  theme: string;
  preferredModel: string;
}

export default function SettingsPage() {
  const router = useRouter();

  const [user, setUser] = useState<UserSettings>({
    name: "",
    email: "",
    theme: "light",
    preferredModel: "gemini-3.5-flash",
  });

  const [loading, setLoading] = useState(false);

  // Load Settings
  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    try {
      const res = await API.get("/settings");

      setUser({
        name: res.data.name,
        email: res.data.email,
        theme: res.data.theme || "light",
        preferredModel:
          res.data.preferredModel || "gemini-3.5-flash",
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Save Settings
  async function saveSettings() {
    try {
      setLoading(true);

      await API.put("/settings", {
        name: user.name,
        theme: user.theme,
        preferredModel: user.preferredModel,
      });

      alert("✅ Settings updated successfully");

    } catch (error) {
      console.error(error);
      alert("❌ Failed to update settings");
    }

    setLoading(false);
  }

  // Logout
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  }

  return (
    <div className="flex min-h-screen bg-[#FFF7F2]">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <main className="flex-1 p-8">

        <Topbar />

        <h1 className="text-4xl font-bold mt-8">
          ⚙️ Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your DevOS AI preferences.
        </p>

        <div className="grid gap-7 mt-10">

          {/* Profile */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              👤 Profile
            </h2>

            <div className="space-y-5">

              <div>

                <label className="block font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  value={user.name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3 outline-none"
                />

              </div>

              <div>

                <label className="block font-medium mb-2">
                  Email
                </label>

                <input
                  value={user.email}
                  disabled
                  className="w-full border rounded-xl p-3 bg-gray-100"
                />

              </div>

            </div>

          </div>

          {/* AI Model */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-5">
              🤖 AI Model
            </h2>

            <select
              value={user.preferredModel}
              onChange={(e) =>
                setUser({
                  ...user,
                  preferredModel: e.target.value,
                })
              }
              className="border rounded-xl p-3 w-full"
            >
              <option value="gemini-3.5-flash">
                Gemini 3.5 Flash
              </option>

              <option value="gemini-2.5-flash">
                Gemini 2.5 Flash
              </option>

              <option value="gemini-2.5-pro">
                Gemini 2.5 Pro
              </option>

            </select>

          </div>

          {/* Theme */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-5">
              🎨 Theme
            </h2>

            <select
              value={user.theme}
              onChange={(e) =>
                setUser({
                  ...user,
                  theme: e.target.value,
                })
              }
              className="border rounded-xl p-3 w-full"
            >
              <option value="light">
                ☀️ Light
              </option>

              <option value="dark">
                🌙 Dark
              </option>

            </select>

          </div>

          {/* Actions */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Actions
            </h2>

            <div className="flex gap-5 flex-wrap">

              <button
                onClick={saveSettings}
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-7 py-3 rounded-xl font-semibold hover:opacity-90"
              >
                {loading ? "Saving..." : "💾 Save Settings"}
              </button>

              <button
                onClick={logout}
                className="bg-black text-white px-7 py-3 rounded-xl"
              >
                🚪 Logout
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}