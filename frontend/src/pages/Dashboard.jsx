import {
  Siren,
  UserRound,
  BedDouble,
  Ambulance,
} from "lucide-react";
import ActiveEmergencyTable from "../components/dashboard/ActiveEmergencyTable";
import LiveAlerts from "../components/dashboard/LiveAlerts";
import { useEmergency } from "../context/EmergencyContext";

export default function Dashboard() {
  const {
  emergencies,
  doctors,
  icuBeds,
  ambulances,
} = useEmergency();

const totalCases = emergencies.length;
const availableDoctors = doctors.filter(
  (doctor) => doctor.available
).length;

const availableICUBeds = icuBeds.filter(
  (bed) => bed.available
).length;

const availableAmbulances = ambulances.filter(
  (ambulance) => ambulance.status === "Available"
).length;
const criticalCases = emergencies.filter(
    (e) => e.priority === "Critical"
  ).length;

const highCases = emergencies.filter(
  (e) => e.priority === "High"
).length;

const mediumCases = emergencies.filter(
  (e) => e.priority === "Medium"
).length;

const lowCases = emergencies.filter(
  (e) => e.priority === "Low"
).length;

  return (
    <div className="relative z-10 px-10 pt-8">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white">
          Emergency Dashboard
        </h1>

        <p className="text-gray-300 text-lg mt-2">
          Real-time overview of emergency operations
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-4 gap-5">

        {/* Active Emergency */}
        <div className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 hover:border-blue-400 transition-all duration-300">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-300">
                Active Emergencies
              </p>

              <h2 className="text-5xl font-bold text-white mt-2">
                {emergencies.length}
              </h2>

              <p className="text-red-400 mt-2">
  
</p>
            </div>

            <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
              <Siren size={42} className="text-red-500" />
            </div>

          </div>
        </div>

        {/* Doctors */}
        <div className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 hover:border-blue-400 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-300">
                Available Doctors
              </p>

              <h2 className="text-5xl font-bold text-white mt-2">
                {availableDoctors}
              </h2>

              <p className="text-green-400 mt-2">
                On Duty
              </p>

            </div>

            <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center">
              <UserRound size={42} className="text-orange-400" />
            </div>

          </div>

        </div>

        {/* ICU */}
                <div className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 hover:border-blue-400 transition-all duration-300">


          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-300">
                ICU Beds
              </p>

              <h2 className="text-5xl font-bold text-white mt-2">
                {availableICUBeds}
              </h2>

              <p className="text-green-400 mt-2">
                Available
              </p>

            </div>

            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
              <BedDouble size={42} className="text-green-400" />
            </div>

          </div>

        </div>

        {/* Ambulance */}
        <div className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 hover:border-blue-400 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-300">
                Ambulances
              </p>

              <h2 className="text-5xl font-bold text-white mt-2">
                {availableAmbulances}
              </h2>

              <p className="text-blue-400 mt-2">
                Ready
              </p>

            </div>

            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Ambulance size={42} className="text-blue-400" />
            </div>

          </div>

        </div>

      </div>
         <div className="grid grid-cols-4 gap-6 mt-8">

  <div className="col-span-3">
    <ActiveEmergencyTable />
  </div>

  <div className="col-span-1">
    <LiveAlerts />
  </div>
{/* Priority Summary */}
<div className="grid grid-cols-4 gap-5 mt-6">

  <div className="bg-red-500/20 rounded-2xl p-5 border border-red-500/30">
    <h3 className="text-red-400 text-lg font-semibold">Critical</h3>
    <p className="text-4xl font-bold text-white">{criticalCases}</p>
  </div>

  <div className="bg-orange-500/20 rounded-2xl p-5 border border-orange-500/30">
    <h3 className="text-orange-400 text-lg font-semibold">High</h3>
    <p className="text-4xl font-bold text-white">{highCases}</p>
  </div>

  <div className="bg-yellow-500/20 rounded-2xl p-5 border border-yellow-500/30">
    <h3 className="text-yellow-300 text-lg font-semibold">Medium</h3>
    <p className="text-4xl font-bold text-white">{mediumCases}</p>
  </div>

  <div className="bg-green-500/20 rounded-2xl p-5 border border-green-500/30">
    <h3 className="text-green-400 text-lg font-semibold">Low</h3>
    <p className="text-4xl font-bold text-white">{lowCases}</p>
  </div>

</div>
</div>
    </div>

    
    
  );
}