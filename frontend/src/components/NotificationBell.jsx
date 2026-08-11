import { Bell } from "lucide-react";
import { useEmergency } from "../context/EmergencyContext";
import { useState } from "react";

export default function NotificationBell() {
  const { alerts } = useEmergency();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      {/* Bell */}
      <button
        onClick={() => setOpen(!open)}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-xl hover:bg-white/20 transition"
      >
        <Bell size={24} className="text-white" />

        {alerts.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {alerts.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-96 bg-[#071A35] border border-blue-800 rounded-2xl shadow-2xl overflow-hidden z-50">

          <div className="flex justify-between items-center px-5 py-4 border-b border-blue-800">
            <h2 className="text-white font-bold text-lg">
              Notifications
            </h2>

            <span className="text-xs text-blue-300">
              {alerts.length} Alerts
            </span>
          </div>

          <div className="max-h-96 overflow-y-auto">

            {alerts.length === 0 ? (

              <div className="text-center text-gray-400 py-10">
                No Notifications
              </div>

            ) : (

              alerts.map((alert) => (

                <div
                  key={alert.id}
                  className="px-5 py-4 border-b border-blue-900 hover:bg-blue-900/30 transition"
                >

                  <div className="flex justify-between">

                    <p className="text-white text-sm">
                      {alert.message}
                    </p>

                    <span className="text-xs text-gray-400">
                      {alert.time}
                    </span>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>
      )}

    </div>
  );
}