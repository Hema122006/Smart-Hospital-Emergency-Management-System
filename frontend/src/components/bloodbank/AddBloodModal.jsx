import { useState } from "react";
import { X } from "lucide-react";

export default function AddBloodModal({
  open,
  onClose,
  addBlood,
}) {
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!bloodGroup || !units) return;

    addBlood({
      bloodGroup,
      units: Number(units),
    });

    setBloodGroup("");
    setUnits("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#071A35] rounded-2xl p-8 w-[450px] border border-red-700">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Add Blood Stock
          </h2>

          <button onClick={onClose}>
            <X className="text-white" />
          </button>
        </div>

        <input
          placeholder="Blood Group (A+, O-, etc)"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full mb-4 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          type="number"
          placeholder="Units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          className="w-full mb-6 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700"
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
}