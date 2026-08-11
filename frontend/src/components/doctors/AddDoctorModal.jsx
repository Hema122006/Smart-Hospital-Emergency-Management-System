import { useState } from "react";
import { X } from "lucide-react";

export default function AddDoctorModal({
  open,
  onClose,
  addDoctor,
}) {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
  if (!name || !specialization) return;

  addDoctor({
    name,
    specialization,
    phone: "",
    status: "Available",
    available: true,
  });

  setName("");
  setSpecialization("");
  onClose();
};

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#0B1F3A] w-[450px] rounded-2xl p-6 border border-white/20">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Add Doctor
          </h2>

          <button onClick={onClose}>
            <X className="text-white" />
          </button>
        </div>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white outline-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-white font-semibold"
          >
            Add Doctor
          </button>

        </div>

      </div>

    </div>
  );
}