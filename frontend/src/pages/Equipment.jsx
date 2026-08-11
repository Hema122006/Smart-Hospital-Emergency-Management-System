import { useState } from "react";
import { Package, Plus } from "lucide-react";

import { useEmergency } from "../context/EmergencyContext";
import EquipmentCard from "../components/equipment/EquipmentCard";
import AddEquipmentModal from "../components/equipment/AddEquipmentModal";

export default function Equipment() {

  const {
  equipments,
  addEquipment,
  changeEquipmentStatus,
  deleteEquipment,
} = useEmergency();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = equipments.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.category.toLowerCase().includes(search.toLowerCase())
  );

  const available = equipments.filter(
    (e) => e.status === "Available"
  ).length;

  const inUse = equipments.filter(
    (e) => e.status === "In Use"
  ).length;

  const maintenance = equipments.filter(
    (e) => e.status === "Maintenance"
  ).length;

  return (
    <div className="p-10 text-white">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Equipment Management
          </h1>

          <p className="text-gray-300 mt-2">
            Monitor hospital equipment
          </p>
        </div>

        <button
  onClick={() => setOpen(true)}
  className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex gap-2 items-center"
>
          <Plus size={20}/>
          Add Equipment
        </button>

      </div>

      <div className="grid grid-cols-3 gap-5 mb-8">

        <div className="bg-green-600/20 border border-green-500 rounded-2xl p-5">
          <h2>Available</h2>
          <p className="text-5xl font-bold mt-2">{available}</p>
        </div>

        <div className="bg-blue-600/20 border border-blue-500 rounded-2xl p-5">
          <h2>In Use</h2>
          <p className="text-5xl font-bold mt-2">{inUse}</p>
        </div>

        <div className="bg-red-600/20 border border-red-500 rounded-2xl p-5">
          <h2>Maintenance</h2>
          <p className="text-5xl font-bold mt-2">{maintenance}</p>
        </div>

      </div>

      <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search Equipment..."
        className="w-full mb-8 bg-white/10 rounded-xl px-4 py-3 outline-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filtered.length===0 ? (

          <div className="col-span-full text-center py-20">

            <Package
              size={60}
              className="mx-auto mb-3 text-gray-400"
            />

            <p>No Equipment Found</p>

          </div>

        ) : (

          filtered.map((item)=>(
            <EquipmentCard
              key={item.id}
              equipment={item}
              changeStatus={changeEquipmentStatus}
              deleteEquipment={deleteEquipment}
            />
          ))

        )}

      </div>
        <AddEquipmentModal
  open={open}
  onClose={() => setOpen(false)}
  addEquipment={addEquipment}
/>
    </div>
  );
}