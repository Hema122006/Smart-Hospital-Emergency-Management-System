import { Wrench, Trash2 } from "lucide-react";

export default function EquipmentCard({
  equipment,
  changeStatus,
  deleteEquipment,
}) {
  const statusColor = {
    Available: "bg-green-600",
    "In Use": "bg-blue-600",
    Maintenance: "bg-red-600",
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-bold text-white">
            {equipment.name}
          </h2>

          <p className="text-gray-300 mt-2">
            Category : {equipment.category}
          </p>

          <p className="text-gray-400 text-sm">
            ID : {equipment.serial}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm ${statusColor[equipment.status]}`}
        >
          {equipment.status}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => changeStatus(equipment.id)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl py-2 flex justify-center items-center gap-2"
        >
          <Wrench size={18} />
          Change Status
        </button>

        <button
          onClick={() => deleteEquipment(equipment.id)}
          className="bg-red-600 hover:bg-red-700 rounded-xl px-4"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}