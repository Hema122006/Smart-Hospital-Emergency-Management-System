import { useState } from "react";
import {
  User,
  Phone,
  AlertTriangle,
  HeartPulse,
  Ambulance,
  Save,
} from "lucide-react";
import { useEmergency } from "../context/EmergencyContext";
import { useNavigate } from "react-router-dom";

export default function NewEmergency() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    contact: "",
    emergencyType: "",
    priority: "Medium",
    doctor: "",
    icu: "No",
    notes: "",
  });
  const { addEmergency } = useEmergency();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addEmergency({
      patientName: formData.patientName,
      age: Number(formData.age),
      gender: formData.gender,
      emergencyType: formData.emergencyType,
      priority: formData.priority,
      doctor: formData.doctor,
      status: "Pending",
       bloodGroup: formData.bloodGroup,
       contact: formData.contact,
       icuRequired: formData.icu,
       notes: formData.notes,
    });

  

    setFormData({
      patientName: "",
      age: "",
      gender: "",
      bloodGroup: "",
      contact: "",
      emergencyType: "",
      priority: "Medium",
      doctor: "",
      icu: "No",
      notes: "",
    });

    navigate("/all-emergencies");
  } catch (error) {
    console.error(error);
    alert("Failed to register emergency");
  }
};

  return (
    <div className="p-10 text-white">

      <h1 className="text-5xl font-bold mb-2">
        Register New Emergency
      </h1>

      <p className="text-gray-300 mb-8">
        Enter patient emergency details
      </p>

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8"
      >

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block mb-2">Patient Name</label>

            <div className="flex items-center bg-white/10 rounded-xl px-4">
              <User size={18} />
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full p-3 bg-transparent outline-none"
                placeholder="Enter patient name"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Age</label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 outline-none"
              placeholder="Age"
            />
          </div>

          <div>
            <label className="block mb-2">Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 outline-none"
            >
              <option value="" className="text-black">
  Select Gender
</option>
<option value="Male" className="text-black">
  Male
</option>
<option value="Female" className="text-black">
  Female
</option>
<option value="Other" className="text-black">
  Other
</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Blood Group</label>

            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 outline-none"
              placeholder="O+"
            />
          </div>

          <div>
            <label className="block mb-2">Contact Number</label>

            <div className="flex items-center bg-white/10 rounded-xl px-4">
              <Phone size={18} />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-3 bg-transparent outline-none"
                placeholder="9876543210"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Emergency Type</label>

            <div className="flex items-center bg-white/10 rounded-xl px-4">
              <HeartPulse size={18} />

              <input
                type="text"
                name="emergencyType"
                value={formData.emergencyType}
                onChange={handleChange}
                className="w-full p-3 bg-transparent outline-none"
                placeholder="Heart Attack"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Priority</label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 outline-none"
            >
              <option className="text-black">Critical</option>
              <option className="text-black">High</option>
              <option className="text-black">Medium</option>
              <option className="text-black">Low</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Assigned Doctor</label>

            <input
              type="text"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 outline-none"
              placeholder="Dr. Anitha"
            />
          </div>

          <div>
            <label className="block mb-2">ICU Required</label>

            <select
              name="icu"
              value={formData.icu}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 outline-none"
            >
              <option className="text-black">Yes</option>
              <option className="text-black">No</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block mb-2">Symptoms / Notes</label>

            <textarea
              rows="4"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 outline-none"
              placeholder="Enter symptoms..."
            ></textarea>
          </div>

        </div>

        <button
          type="submit"
          className="mt-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition"
        >
          <Save size={18} />
          Register Emergency
        </button>

      </form>
    </div>
  );
}