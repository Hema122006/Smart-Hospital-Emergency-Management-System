import { BedDouble, Trash2 } from "lucide-react";
export default function ICUBedCard({
  bed,
  allocateBed,
  releaseBed,
  deleteICUBed,
}) {
  return (
    <div
      className={`rounded-2xl p-5 border backdrop-blur-xl ${
        bed.available
          ? "border-green-500 bg-green-500/10"
          : "border-red-500 bg-red-500/10"
      }`}
    >
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-white">
            {bed.bedNo}
          </h2>

          <p className="text-gray-300">
            {bed.ward}
          </p>
        </div>

        <BedDouble
          size={36}
          className={
            bed.available
              ? "text-green-400"
              : "text-red-400"
          }
        />
      </div>

      <div className="mt-5">

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            bed.available
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {bed.available
            ? "Available"
            : "Occupied"}
        </span>

      </div>

      <button
        onClick={() =>
          bed.available
            ? allocateBed(bed.id)
            : releaseBed(bed.id)
        }
        className={`w-full mt-5 py-3 rounded-xl ${
          bed.available
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-orange-600 hover:bg-orange-700"
        }`}
      >
        {bed.available
          ? "Allocate Bed"
          : "Release Bed"}
      </button>

      <button
  onClick={() => deleteICUBed(bed.id)}
  className="w-full mt-3 py-3 rounded-xl bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2"
>
  <Trash2 size={18} />
  Delete Bed
</button>

    </div>
  );
}