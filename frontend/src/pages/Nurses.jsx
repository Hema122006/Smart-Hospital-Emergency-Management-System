import { useState } from "react";
import { UserRound, Plus, Trash2 } from "lucide-react";

import { useEmergency } from "../context/EmergencyContext";
import AddNurseModal from "../components/nurse/AddNurseModal";

export default function Nurses() {
  const [showAddModal, setShowAddModal] = useState(false);
  const {
    nurses,
    addNurse,
    deleteNurse,
    toggleNurseAvailabilityStatus,
  } = useEmergency();

  const [search, setSearch] = useState("");

  const filteredNurses = nurses.filter(
    (nurse) =>
      nurse.name.toLowerCase().includes(search.toLowerCase()) ||
      nurse.department.toLowerCase().includes(search.toLowerCase())
  );

  const available = nurses.filter(
    (nurse) => nurse.available
  ).length;

  const busy = nurses.length - available;

  return (
    <div className="p-10 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Nurses Management
          </h1>

          <p className="text-gray-300 mt-2">
            Manage all hospital nurses
          </p>
        </div>

        <button
  onClick={() => setShowAddModal(true)}
  className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex items-center gap-2"
>
  <Plus size={20} />
  Add Nurse
</button>

      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-5 mb-8">

        <div className="bg-green-600/20 border border-green-500 rounded-2xl p-5">
          <p className="text-gray-300">
            Available Nurses
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">
            {available}
          </h2>
        </div>

        <div className="bg-red-600/20 border border-red-500 rounded-2xl p-5">
          <p className="text-gray-300">
            Busy Nurses
          </p>

          <h2 className="text-5xl font-bold text-red-400 mt-2">
            {busy}
          </h2>
        </div>

      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Nurse or Department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
      />

      {/* Nurse Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredNurses.length === 0 ? (

          <div className="col-span-full text-center py-20 text-gray-400">
            <UserRound size={60} className="mx-auto mb-4" />
            No Nurses Found
          </div>

        ) : (

          filteredNurses.map((nurse) => (

            <div
              key={nurse.id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
            >

              {/* Nurse Header */}
              <div className="flex justify-between items-start">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                    <UserRound size={28} />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {nurse.name}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      N{String(nurse.id).padStart(3, "0")}
                    </p>
                  </div>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    nurse.available
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {nurse.available ? "Available" : "Busy"}
                </span>

              </div>

              {/* Details */}
              <div className="mt-6 space-y-2">

                <p>
                  <span className="text-gray-400">
                    Department :
                  </span>{" "}
                  {nurse.department}
                </p>

                <p>
                  <span className="text-gray-400">
                    Phone :
                  </span>{" "}
                  {nurse.phone}
                </p>

              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">

                <button
                  onClick={() =>
                    toggleNurseAvailabilityStatus(nurse.id)
                  }
                  className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl py-2"
                >
                  Change Status
                </button>

                <button
                  onClick={() => deleteNurse(nurse.id)}
                  className="bg-red-600 hover:bg-red-700 rounded-xl px-4"
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>

          ))

        )}

      </div>
      <AddNurseModal
  open={showAddModal}
  onClose={() => setShowAddModal(false)}
  addNurse={addNurse}
/>

    </div>
  );
}