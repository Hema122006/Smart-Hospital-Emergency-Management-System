import { UserRound, Trash2 } from "lucide-react";

export default function DoctorCard({
  doctor,
  toggleAvailability,
  deleteDoctor,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

      {/* Doctor Info */}
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center">
          <UserRound className="text-blue-400" size={28} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            {doctor.name}
          </h2>

          <p className="text-gray-300">
            {doctor.specialization}
          </p>

          <span
            className={`text-sm font-semibold ${
              doctor.available
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {doctor.available
              ? "🟢 Available"
              : "🔴 Busy"}
          </span>
        </div>

      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-6">

        <button
          onClick={() => toggleAvailability(doctor.id)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
        >
          {doctor.available
            ? "Mark Busy"
            : "Mark Available"}
        </button>

        <button
          onClick={() => deleteDoctor(doctor.id)}
          className="bg-red-600 hover:bg-red-700 p-2 rounded-lg"
        >
          <Trash2 size={20} />
        </button>

      </div>

    </div>
  );
}