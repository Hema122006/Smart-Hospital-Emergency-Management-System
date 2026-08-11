import { useState } from "react";

export default function AddICUBedModal({
  open,
  onClose,
  addICUBed,
}) {
  const [bedNo, setBedNo] = useState("");
  const [ward, setWard] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!bedNo || !ward) return;

    addICUBed({
      bedNo,
      ward,
      available: true,
    });

    setBedNo("");
    setWard("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#071A35] rounded-2xl p-8 w-[450px] border border-blue-700">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add ICU Bed
        </h2>

        <input
          placeholder="Bed Number"
          value={bedNo}
          onChange={(e) => setBedNo(e.target.value)}
          className="w-full mb-4 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          placeholder="Ward"
          value={ward}
          onChange={(e) => setWard(e.target.value)}
          className="w-full mb-6 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <div className="flex gap-3 justify-end">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
}