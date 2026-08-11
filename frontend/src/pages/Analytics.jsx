import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

import { useEmergency } from "../context/EmergencyContext";

export default function Analytics() {
  const { emergencies } = useEmergency();

  // Priority Data
  const priorityData = [
    {
      name: "Critical",
      value: emergencies.filter((e) => e.priority === "Critical").length,
    },
    {
      name: "High",
      value: emergencies.filter((e) => e.priority === "High").length,
    },
    {
      name: "Medium",
      value: emergencies.filter((e) => e.priority === "Medium").length,
    },
    {
      name: "Low",
      value: emergencies.filter((e) => e.priority === "Low").length,
    },
  ];

  // Emergency Type Count
  const typeMap = {};

  emergencies.forEach((e) => {
    typeMap[e.emergencyType] =
      (typeMap[e.emergencyType] || 0) + 1;
  });

  const typeData = Object.keys(typeMap).map((key) => ({
    type: key,
    count: typeMap[key],
  }));

  const COLORS = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
  ];

  return (
    <div className="p-10 text-white">

      <h1 className="text-5xl font-bold mb-2">
        Analytics Dashboard
      </h1>

      <p className="text-gray-300 mb-8">
        Real-time Emergency Statistics
      </p>

      <div className="grid grid-cols-2 gap-8">

        {/* Pie */}

        <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <h2 className="text-2xl font-bold mb-5">
            Priority Distribution
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>

              <Pie
                data={priorityData}
                dataKey="value"
                outerRadius={120}
                label
              >
                {priorityData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

        {/* Bar */}

        <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <h2 className="text-2xl font-bold mb-5">
            Emergency Types
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={typeData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="type" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="count"
                fill="#3b82f6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}