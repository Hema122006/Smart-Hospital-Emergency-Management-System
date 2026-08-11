import {
  AlertTriangle,
  Ambulance,
  Stethoscope,
  BedDouble,
  Info,
} from "lucide-react";

import { useEmergency } from "../../context/EmergencyContext";

export default function LiveAlerts() {
  const { alerts } = useEmergency();

  const getIcon = (type) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="text-red-400" size={18} />;

      case "doctor":
        return <Stethoscope className="text-blue-400" size={18} />;

      case "icu":
        return <BedDouble className="text-green-400" size={18} />;

      case "ambulance":
        return <Ambulance className="text-orange-400" size={18} />;

      default:
        return <Info className="text-gray-300" size={18} />;
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-white mb-5">
        Live Alerts
      </h2>

      <div className="space-y-4">

        {alerts.length === 0 ? (
          <p className="text-gray-400">
            No alerts available
          </p>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-3 border-b border-white/10 pb-3"
            >
              {getIcon(alert.type)}

              <div>
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
  );
}