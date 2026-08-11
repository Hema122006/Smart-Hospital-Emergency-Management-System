import { useState } from "react";

export default function AddNurseModal({
  open,
  onClose,
  addNurse,
}) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!name || !department || !phone) return;

    addNurse({
      name,
      department,
      phone,
      available: true,
    });

    setName("");
    setDepartment("");
    setPhone("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#071A35] rounded-2xl p-8 w-[450px] border border-blue-700">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add Nurse
        </h2>

        <input
          type="text"
          placeholder="Nurse Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full mb-4 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-6 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <div className="flex gap-3 justify-end">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-600 hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Add Nurse
          </button>

        </div>

      </div>

    </div>
  );
}