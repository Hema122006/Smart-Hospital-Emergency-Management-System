import { useEmergency } from "../context/EmergencyContext";
import PriorityCard from "../components/triage/PriorityCard";

export default function PriorityTriage() {
  const { emergencies } = useEmergency();

  const critical = emergencies.filter(
    (e) => e.priority === "Critical"
  );

  const high = emergencies.filter(
    (e) => e.priority === "High"
  );

  const medium = emergencies.filter(
    (e) => e.priority === "Medium"
  );

  const low = emergencies.filter(
    (e) => e.priority === "Low"
  );

  return (
    <div className="p-10 text-white">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Priority Triage
        </h1>

        <p className="text-gray-300 mt-2 text-lg">
          Patient prioritization based on emergency severity
        </p>
      </div>

      {/* Critical */}
      <Section
        title="🔴 Critical"
        color="text-red-400"
        patients={critical}
      />

      {/* High */}
      <Section
        title="🟠 High"
        color="text-orange-400"
        patients={high}
      />

      {/* Medium */}
      <Section
        title="🟡 Medium"
        color="text-yellow-300"
        patients={medium}
      />

      {/* Low */}
      <Section
        title="🟢 Low"
        color="text-green-400"
        patients={low}
      />

    </div>
  );
}

function Section({ title, color, patients }) {
  return (
    <div className="mb-10">

      <div className="flex items-center justify-between mb-5">

        <h2 className={`text-3xl font-bold ${color}`}>
          {title}
        </h2>

        <span className="bg-white/10 px-4 py-2 rounded-full">
          {patients.length} Patients
        </span>

      </div>

      {patients.length === 0 ? (

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-gray-400">
          No patients available
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {patients.map((patient) => (
            <PriorityCard
              key={patient.id}
              patient={patient}
            />
          ))}

        </div>

      )}

    </div>
  );
}