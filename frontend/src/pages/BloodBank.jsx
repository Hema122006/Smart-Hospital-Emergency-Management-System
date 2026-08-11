import { useState } from "react";
import { Droplets, Plus } from "lucide-react";

import { useEmergency } from "../context/EmergencyContext";
import BloodCard from "../components/bloodbank/BloodCard";
import AddBloodModal from "../components/bloodbank/AddBloodModal";

export default function BloodBank() {
  const {
  bloodBank,
  addBlood,
  addBloodUnit,
  issueBloodUnit,
} = useEmergency();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = bloodBank.filter(
  (b) =>
    (b.bloodGroup || "")
      .toLowerCase()
      .includes(search.toLowerCase())
);
  const totalUnits = bloodBank.reduce(
    (sum, b) => sum + b.units,
    0
  );

  const lowStock = bloodBank.filter(
    (b) => b.units <= 5
  ).length;

  return (
    <div className="p-10 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Blood Bank Management
          </h1>

          <p className="text-gray-300 mt-2">
            Monitor blood inventory and stock
          </p>
        </div>

        <button
  onClick={() => setOpen(true)}
  className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl flex items-center gap-2"
>
  <Plus size={20} />
  Add Blood Stock
</button>

      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-6 mb-8">

        <div className="bg-red-600/20 border border-red-500 rounded-2xl p-6">
          <p className="text-gray-300">
            Total Blood Units
          </p>

          <h2 className="text-5xl font-bold text-red-400 mt-2">
            {totalUnits}
          </h2>
        </div>

        <div className="bg-yellow-600/20 border border-yellow-500 rounded-2xl p-6">
          <p className="text-gray-300">
            Low Stock Groups
          </p>

          <h2 className="text-5xl font-bold text-yellow-400 mt-2">
            {lowStock}
          </h2>
        </div>

      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Blood Group..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
      />

      {/* Blood Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {filtered.length === 0 ? (

  <div className="col-span-full text-center py-20 text-gray-400">
    <Droplets size={60} className="mx-auto mb-4" />
    No Blood Group Found
  </div>

) : (

  filtered.map((blood) => (
    <BloodCard
      key={blood.id}
      blood={blood}
      addUnit={addBloodUnit}
      issueUnit={issueBloodUnit}
    />
  ))

)}

      </div>
      <AddBloodModal
  open={open}
  onClose={() => setOpen(false)}
  addBlood={addBlood}
/>

    </div>
  );
}