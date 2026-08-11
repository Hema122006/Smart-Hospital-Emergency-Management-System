import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { useEmergency } from "../context/EmergencyContext";

export default function Alerts() {
  const { alerts } = useEmergency();

  const [search, setSearch] = useState("");

  const filteredAlerts = alerts.filter((alert) =>
    alert.message.toLowerCase().includes(search.toLowerCase())
  );

  const typeColor = (type) => {
    switch (type) {
      case "critical":
        return "bg-red-600";
      case "doctor":
        return "bg-blue-600";
      case "icu":
        return "bg-green-600";
      case "ambulance":
        return "bg-orange-500";
      case "blood":
        return "bg-pink-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="p-10 text-white">

      <h1 className="text-5xl font-bold">
        Alerts
      </h1>

      <p className="text-gray-300 mt-2 mb-8">
        Live Hospital Alert History
      </p>

      <input
        type="text"
        placeholder="Search alerts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
      />

      <div className="space-y-4">

        {filteredAlerts.length === 0 ? (

          <div className="text-center py-20 text-gray-400">

            <AlertTriangle
              size={60}
              className="mx-auto mb-4"
            />

            No Alerts Found

          </div>

        ) : (

          filteredAlerts.map((alert) => (

            <div
              key={alert.id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 flex justify-between items-center"
            >

              <div>

                <h2 className="text-lg font-semibold">
                  {alert.message}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {alert.time}
                </p>

              </div>

              <span
                className={`px-4 py-2 rounded-full ${typeColor(alert.type)}`}
              >
                {alert.type}
              </span>

            </div>

          ))

        )}

      </div>

    </div>
  );
}