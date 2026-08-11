import {
  User,
  Clock3,
  HeartPulse,
  Stethoscope,
  Ambulance,
  BedDouble,
} from "lucide-react";

import { useEmergency } from "../../context/EmergencyContext";
const priorityColor = {
  Critical: "border-red-500 bg-red-500/10",
  High: "border-orange-500 bg-orange-500/10",
  Medium: "border-yellow-500 bg-yellow-500/10",
  Low: "border-green-500 bg-green-500/10",
};

export default function PriorityCard({ patient }) {
  const {
    assignDoctor,
    allocateICU,
    dispatchAmbulance,
  } = useEmergency();

  return (
    <div
      className={`rounded-2xl border p-5 backdrop-blur-xl ${
        priorityColor[patient.priority] || "border-gray-600 bg-white/5"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <User size={18} />
            {patient.patientName}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            {patient.id}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            patient.priority === "Critical"
              ? "bg-red-600"
              : patient.priority === "High"
              ? "bg-orange-500"
              : patient.priority === "Medium"
              ? "bg-yellow-500 text-black"
              : "bg-green-600"
          }`}
        >
          {patient.priority}
        </span>
      </div>

      {/* Details */}
      <div className="mt-5 space-y-3 text-gray-300">

        <p className="flex items-center gap-2">
          <HeartPulse size={18} />
          {patient.emergencyType || "Condition Not Available"}
        </p>

        <p className="flex items-center gap-2">
          <Stethoscope size={18} />
          {patient.doctor || "Doctor Not Assigned"}
        </p>

        <div className="flex justify-between items-center">

  <div className="flex flex-col gap-2 mt-4">

  <p className="flex items-center gap-2 text-gray-300">
    <Clock3 size={18} />
    {patient.time}
  </p>

  <span
    className={`w-fit px-3 py-1 rounded-full text-xs ${
      patient.status === "Pending"
        ? "bg-orange-500"
        : patient.status === "Doctor Assigned"
        ? "bg-blue-600"
        : patient.status === "ICU Allocated"
        ? "bg-green-600"
        : "bg-red-600"
    }`}
  >
    {patient.status}
  </span>

</div>

</div>

      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-6">

        <button
  onClick={() => {
  console.log(patient.id);
  assignDoctor(patient.id);
}}
  disabled={patient.doctor !== "Not Assigned"}
  className={`py-2 rounded-xl transition ${
    patient.doctor !== "Not Assigned"
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {patient.doctor !== "Not Assigned"
    ? "Doctor Assigned"
    : "Assign Doctor"}
</button>

        <button
  onClick={() => allocateICU(patient.id)}
  disabled={patient.icu}
  className={`py-2 rounded-xl transition flex justify-center items-center gap-2 ${
    patient.icu
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-green-600 hover:bg-green-700"
  }`}
>
          <BedDouble size={18} />
{patient.icu ? "Allocated" : "Allocate ICU"}
        </button>

      </div>

      <button
  onClick={() => dispatchAmbulance(patient.id)}
  disabled={patient.ambulance}
  className={`w-full mt-3 py-3 rounded-xl flex justify-center items-center gap-2 transition ${
    patient.ambulance
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-red-600 hover:bg-red-700"
  }`}
>
        <Ambulance size={18} />
{patient.ambulance
  ? "Ambulance Dispatched"
  : "Dispatch Ambulance"}
      </button>
    </div>
  );
}