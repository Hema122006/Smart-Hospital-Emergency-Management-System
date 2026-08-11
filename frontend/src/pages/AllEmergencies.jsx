import { useEmergency } from "../context/EmergencyContext";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { exportEmergencyPDF } from "../utils/exportPDF";

export default function AllEmergencies() {
  const {
  emergencies,
  updateEmergency,
  deleteEmergency,
} = useEmergency();

  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({});

  const filteredEmergencies = emergencies.filter((e) => {
    const matchesSearch =
  (e.patientName || "")
    .toLowerCase()
    .includes(search.toLowerCase()) ||
  String(e.id)
    .toLowerCase()
    .includes(search.toLowerCase());

    const matchesPriority =
      priorityFilter === "All" ||
      e.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

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
      case "Pending":
        return "bg-orange-500";
      case "Doctor Assigned":
        return "bg-blue-600";
      case "ICU Allocated":
        return "bg-green-600";
      case "Ambulance Dispatched":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="p-10 text-white">

      <h1 className="text-5xl font-bold">
        All Emergencies
      </h1>

      <p className="text-gray-300 mt-2 mb-8">
        View and manage all emergency cases
      </p>

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

        {/* Search & Filter */}
        <div className="flex justify-between items-center mb-6">

  <div className="flex gap-3">

    <input
      type="text"
      placeholder="Search Patient / ID..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white w-72 outline-none"
    />

    <select
      value={priorityFilter}
      onChange={(e) => setPriorityFilter(e.target.value)}
      className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white"
    >
      <option value="All" className="text-black">All</option>
      <option value="Critical" className="text-black">Critical</option>
      <option value="High" className="text-black">High</option>
      <option value="Medium" className="text-black">Medium</option>
      <option value="Low" className="text-black">Low</option>
    </select>

  </div>

  <button
    onClick={() => exportEmergencyPDF(filteredEmergencies)}
    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl"
  >
    Export PDF
  </button>

</div>
        </div>

        <table className="w-full">

          <thead className="border-b border-white/20 text-gray-300">

            <tr>
              <th className="text-left py-3">ID</th>
              <th className="text-left">Patient</th>
              <th className="text-left">Age / Gender</th>
              <th className="text-left">Priority</th>
              <th className="text-left">Doctor</th>
              <th className="text-left">Status</th>
              <th className="text-left">Time</th>
              <th className="text-left">Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredEmergencies.length === 0 ? (

              <tr>
                <td
                  colSpan="8"
                  className="text-center py-8 text-gray-400"
                >
                  No emergency found.
                </td>
              </tr>

            ) : (

              filteredEmergencies.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-white/10 hover:bg-white/5 transition"
                >
                  <td className="py-4">{item.id}</td>

                  <td>{item.patientName}</td>

                  <td>
  {item.age} / {item.gender}
</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${priorityColor(
                        item.priority
                      )}`}
                    >
                      {item.priority}
                    </span>
                  </td>

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
                 <td className="flex gap-2 py-3">

  <button
    onClick={() => {
      setEditing(item);
      setEditData(item);
    }}
    className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg"
  >
    <Pencil size={18} />
  </button>

  <button
    onClick={() => deleteEmergency(item.id)}
    className="bg-red-600 hover:bg-red-700 p-2 rounded-lg"
  >
    <Trash2 size={18} />
  </button>

</td>

                </tr>

              ))

            )}

          </tbody>

        </table>
        {editing && (

<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

<div className="bg-[#15233d] rounded-2xl p-8 w-[500px] border border-white/20">

<h2 className="text-3xl font-bold text-white mb-6">
  Edit Emergency
</h2>

<label className="text-gray-300 mb-2 block">
Patient Name
</label>

<input
  type="text"
  value={editData.patientName}
  onChange={(e) =>
    setEditData({
      ...editData,
      patientName: e.target.value,
    })
  }
  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none"
/>
<label className="text-gray-300 mb-2 block">
Age
</label>

<input
  type="number"
  value={editData.age}
  onChange={(e) =>
    setEditData({
      ...editData,
      age: e.target.value,
    })
  }
  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
/>
<label className="text-gray-300 mb-2 block">
Priority
</label>
<select
  value={editData.priority}
  onChange={(e) =>
    setEditData({
      ...editData,
      priority: e.target.value,
    })
  }
  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
>
  <option className="text-black">Critical</option>
  <option className="text-black">High</option>
  <option className="text-black">Medium</option>
  <option className="text-black">Low</option>
</select>

<div className="flex justify-end gap-3">

<button
onClick={()=>setEditing(null)}
className="bg-gray-600 px-5 py-2 rounded"
>

Cancel

</button>

<button
onClick={async()=>{

await updateEmergency(editData.id,editData);

setEditing(null);

}}
className="bg-green-600 px-5 py-2 rounded"
>

Update

</button>

</div>

</div>

</div>

)}

      </div>
  );
}