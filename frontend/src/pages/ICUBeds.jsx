import { useEmergency } from "../context/EmergencyContext";
import ICUBedCard from "../components/icu/ICUBedCard";
import { useState } from "react";
import { Plus } from "lucide-react";
import AddICUBedModal from "../components/icu/AddICUBedModal";

export default function ICUBeds() {
  const [showAddModal, setShowAddModal] = useState(false);
  const {
  icuBeds,
  addICUBed,
  deleteICUBed,
  allocateBed,
  releaseBed,
} = useEmergency();

  const available = icuBeds.filter(
    (bed) => bed.available
  ).length;

  const occupied = icuBeds.length - available;

  return (
    <div className="p-10 text-white">

      {/* Header */}
<div className="flex justify-between items-center mb-8">

  <div>
    <h1 className="text-5xl font-bold">
      ICU Bed Management
    </h1>

    <p className="text-gray-300 mt-2">
      Monitor and allocate ICU beds
    </p>
  </div>

  <button
    onClick={() => setShowAddModal(true)}
    className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex items-center gap-2"
  >
    <Plus size={20} />
    Add ICU Bed
  </button>

</div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-5 mb-8">

        <div className="bg-green-600/20 border border-green-500 rounded-2xl p-5">
          <h2 className="text-lg text-gray-300">
            Available Beds
          </h2>

          <p className="text-5xl font-bold text-green-400 mt-2">
            {available}
          </p>
        </div>

        <div className="bg-red-600/20 border border-red-500 rounded-2xl p-5">
          <h2 className="text-lg text-gray-300">
            Occupied Beds
          </h2>

          <p className="text-5xl font-bold text-red-400 mt-2">
            {occupied}
          </p>
        </div>

        <div className="bg-blue-600/20 border border-blue-500 rounded-2xl p-5">
          <h2 className="text-lg text-gray-300">
            Total Beds
          </h2>

          <p className="text-5xl font-bold text-blue-400 mt-2">
            {icuBeds.length}
          </p>
        </div>

      </div>

      {/* ICU Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {icuBeds.map((bed) => (
          <ICUBedCard
            key={bed.id}
            bed={bed}
            allocateBed={allocateBed}
            releaseBed={releaseBed}
            deleteICUBed={deleteICUBed}
          />
        ))}

      </div>
      <AddICUBedModal
  open={showAddModal}
  onClose={() => setShowAddModal(false)}
  addICUBed={addICUBed}
/>

    </div>
  );
}