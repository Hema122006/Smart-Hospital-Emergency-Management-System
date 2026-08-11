import { useState } from "react";
import { Plus, Search } from "lucide-react";

import { useEmergency } from "../context/EmergencyContext";
import DoctorCard from "../components/doctors/DoctorCard";
import AddDoctorModal from "../components/doctors/AddDoctorModal";

export default function Doctors() {
  const {
    doctors,
    addDoctor,
    deleteDoctor,
    toggleAvailability,
  } = useEmergency();

  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10 text-white">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Doctors Management
          </h1>

          <p className="text-gray-300 mt-2">
            Manage hospital doctors and availability
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={20} />
          Add Doctor
        </button>

      </div>

      <div className="flex items-center gap-3 mb-8">

        <div className="relative w-80">

          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
          />

        </div>

      </div>

      <div className="grid gap-5">

        {filteredDoctors.length === 0 ? (

          <div className="text-center text-gray-400 py-20">
            No doctors found.
          </div>

        ) : (

          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              toggleAvailability={toggleAvailability}
              deleteDoctor={deleteDoctor}
            />
          ))

        )}

      </div>

      <AddDoctorModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        addDoctor={addDoctor}
      />

    </div>
  );
}