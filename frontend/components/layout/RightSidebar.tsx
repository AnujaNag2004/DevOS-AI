"use client";

export default function RightSidebar() {
  return (
    <aside className="w-80 border-l border-stone-200 bg-white p-6">

      <h2 className="text-xl font-bold">AI Assistant</h2>

      <div className="mt-6 rounded-2xl bg-orange-50 p-5">
        <h3 className="font-semibold">Today's Suggestion</h3>
        <p className="mt-2 text-sm text-stone-600">
          Review your latest project before deployment.
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-teal-50 p-5">
        <h3 className="font-semibold">Recent Activity</h3>

        <ul className="mt-3 space-y-3 text-sm text-stone-600">
          <li>✅ Login successful</li>
          <li>🚀 Dashboard loaded</li>
          <li>📄 Documentation ready</li>
        </ul>
      </div>

    </aside>
  );
}