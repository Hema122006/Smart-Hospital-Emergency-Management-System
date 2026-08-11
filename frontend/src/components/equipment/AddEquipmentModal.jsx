import { useState } from "react";

export default function AddEquipmentModal({
  open,
  onClose,
  addEquipment,
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [serial, setSerial] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!name || !category || !serial) return;

    addEquipment({
      name,
      category,
      serial,
      status: "Available",
    });

    setName("");
    setCategory("");
    setSerial("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#071A35] rounded-2xl p-8 w-[450px] border border-blue-700">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add Equipment
        </h2>

        <input
          placeholder="Equipment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-4 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          placeholder="Serial Number"
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
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
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Add
          </button>
        </div>

      </div>
    </div>
  );
}