import { useEmergency } from "../../context/EmergencyContext";
export default function ActiveEmergencyTable() {
  const { emergencies } = useEmergency();

  const priorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return "bg-red-600";
      case "High":
        return "bg-orange-500";
      case "Medium":
        return "bg-yellow-500 text-black";
      default:
        return "bg-green-600";
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-red-600";
      case "Pending":
        return "bg-orange-500";
      case "Assessment":
        return "bg-blue-600";
      default:
        return "bg-green-600";
    }
  };

  return (
    <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-white">
          Active Emergencies
        </h2>

        <button className="text-blue-400 hover:text-blue-300">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-white">

          <thead className="text-gray-300 border-b border-white/20">

            <tr>
              <th className="text-left py-3">ID</th>
              <th className="text-left">Patient</th>
              <th className="text-left">Age / Gender</th>
              <th className="text-left">Priority</th>
              <th className="text-left">Condition</th>
              <th className="text-left">Doctor</th>
              <th className="text-left">Status</th>
              <th className="text-left">Time</th>
            </tr>

          </thead>

          <tbody>

            {emergencies.map((item) => (

              <tr
                key={item.id}
                className="border-b border-white/10 hover:bg-white/5 transition"
              >
                <td className="py-4">{item.id}</td>

                <td>{item.patientName}</td>

                <td>{item.age} / {item.gender}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${priorityColor(
                      item.priority
                    )}`}
                  >
                    {item.priority}
                  </span>
                </td>

                <td>{item.emergencyType}</td>

                <td>{item.doctor}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${statusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>{item.time}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}