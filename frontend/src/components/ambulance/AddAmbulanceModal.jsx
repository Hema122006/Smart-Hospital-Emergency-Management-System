import { useState } from "react";

export default function AddAmbulanceModal({
  open,
  onClose,
  addAmbulance,
}) {
  const [vehicleNo, setVehicleNo] = useState("");
  const [driver, setDriver] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!vehicleNo || !driver) return;

    addAmbulance({
      vehicleNo,
      driver,
    });

    setVehicleNo("");
    setDriver("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-[#071A35] rounded-2xl p-8 w-[450px] border border-blue-700">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add Ambulance
        </h2>

        <input
          placeholder="Vehicle Number"
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.target.value)}
          className="w-full mb-4 bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
        />

        <input
          placeholder="Driver Name"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
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