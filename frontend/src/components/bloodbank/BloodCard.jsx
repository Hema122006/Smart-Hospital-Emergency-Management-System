import { Droplets, Plus, Minus } from "lucide-react";

export default function BloodCard({
  blood,
  addUnit,
  issueUnit,
}) {
  const stockColor = () => {
    if (blood.units <= 5) return "bg-red-600";
    if (blood.units <= 10) return "bg-yellow-500 text-black";
    return "bg-green-600";
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-4xl font-bold text-red-400">
            {blood.bloodGroup}
          </h2>

          <p className="text-gray-300 mt-2">
            Available Units
          </p>

          <h3 className="text-5xl font-bold text-white mt-2">
            {blood.units}
          </h3>
        </div>

        <span className={`px-3 py-1 rounded-full ${stockColor()}`}>
          {blood.units <= 5
            ? "Low Stock"
            : "Available"}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => addUnit(blood.id)}
          className="flex-1 bg-green-600 hover:bg-green-700 rounded-xl py-2 flex justify-center gap-2"
        >
          <Plus size={18}/>
          Add
        </button>

        <button
          onClick={() => issueUnit(blood.id)}
          className="flex-1 bg-red-600 hover:bg-red-700 rounded-xl py-2 flex justify-center gap-2"
        >
          <Minus size={18}/>
          Issue
        </button>

      </div>

    </div>
  );
}