import { Ambulance, Trash2 } from "lucide-react";

export default function AmbulanceCard({
  ambulance,
  changeStatus,
  deleteAmbulance,
}) {
  const statusColor = {
    Available: "bg-green-600",
    "On Duty": "bg-blue-600",
    Maintenance: "bg-red-600",
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Ambulance size={22} />
            {ambulance.vehicleNo}
          </h2>

          <p className="text-gray-300 mt-1">
            Driver : {ambulance.driver}
          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm ${statusColor[ambulance.status]}`}
        >
          {ambulance.status}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => changeStatus(ambulance.id)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl py-2"
        >
          Change Status
        </button>

        <button
          onClick={() => deleteAmbulance(ambulance.id)}
          className="bg-red-600 hover:bg-red-700 rounded-xl px-4"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}