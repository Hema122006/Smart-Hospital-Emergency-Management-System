import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function PriorityChart({ data }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Priority Analysis
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Bar dataKey="patients" fill="#3B82F6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}