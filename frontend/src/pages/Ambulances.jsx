import { useState } from "react";
import { Plus, Ambulance } from "lucide-react";

import { useEmergency } from "../context/EmergencyContext";
import AmbulanceCard from "../components/ambulance/AmbulanceCard";
import AddAmbulanceModal from "../components/ambulance/AddAmbulanceModal";

export default function Ambulances() {
  const {
    ambulances,
    addAmbulance,
    changeAmbulanceStatus,
    deleteAmbulance,
  } = useEmergency();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filteredAmbulances = ambulances.filter(
    (a) =>
      a.vehicleNo.toLowerCase().includes(search.toLowerCase()) ||
      a.driver.toLowerCase().includes(search.toLowerCase())
  );

  const available = ambulances.filter(
    (a) => a.status === "Available"
  ).length;

  const onDuty = ambulances.filter(
    (a) => a.status === "On Duty"
  ).length;

  const maintenance = ambulances.filter(
    (a) => a.status === "Maintenance"
  ).length;

  return (
    <div className="p-10 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Ambulance Management
          </h1>

          <p className="text-gray-300 mt-2">
            Monitor ambulance availability and status
          </p>
        </div>

         <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex items-center gap-2"
          >
          <Plus size={20} />
          Add Ambulance
        </button>

      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-5 mb-8">

        <div className="bg-green-600/20 border border-green-500 rounded-2xl p-5">
          <p className="text-gray-300">
            Available
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">
            {available}
          </h2>
        </div>

        <div className="bg-blue-600/20 border border-blue-500 rounded-2xl p-5">
          <p className="text-gray-300">
            On Duty
          </p>

          <h2 className="text-5xl font-bold text-blue-400 mt-2">
            {onDuty}
          </h2>
        </div>

        <div className="bg-red-600/20 border border-red-500 rounded-2xl p-5">
          <p className="text-gray-300">
            Maintenance
          </p>

          <h2 className="text-5xl font-bold text-red-400 mt-2">
            {maintenance}
          </h2>
        </div>

      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Vehicle No or Driver..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
      />

      {/* Ambulance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredAmbulances.length === 0 ? (

          <div className="col-span-full text-center py-20 text-gray-400">
            <Ambulance size={60} className="mx-auto mb-4" />
            No Ambulances Found
          </div>

        ) : (

          filteredAmbulances.map((ambulance) => (
            <AmbulanceCard
              key={ambulance.id}
              ambulance={ambulance}
              changeStatus={changeAmbulanceStatus}
              deleteAmbulance={deleteAmbulance}
            />
          ))

        )}

      </div>
      <AddAmbulanceModal
  open={open}
  onClose={() => setOpen(false)}
  addAmbulance={addAmbulance}
/>

    </div>
    
  );
}