import { useEffect, useState } from "react";
import { getSettings, saveSettings as saveSettingsAPI } from "../services/settingsService";
import { toast } from "react-toastify";

export default function Settings() {
  const [settings, setSettings] = useState({
    hospitalName: "Smart Hospital",
    address: "Chennai, Tamil Nadu",
    hotline: "108",
    email: "support@smarthospital.com",
    notifications: true,
    darkMode: true,
  });

  useEffect(() => {
  const loadSettings = async () => {
    try {
      const response = await getSettings();

      if (response.data) {
        setSettings(response.data);
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };

  loadSettings();
}, []);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]:
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value,
    });
  };

  const saveSettings = async () => {
  try {
    const response = await saveSettingsAPI(settings);

    setSettings(response.data);

    toast.success("Settings Saved Successfully ✅");
  } catch (error) {
    console.error("Error saving settings:", error);

    toast.error("Failed to Save Settings");
  }
};

  const resetSettings = () => {
    setSettings({
      hospitalName: "Smart Hospital",
      address: "Chennai, Tamil Nadu",
      hotline: "108",
      email: "support@smarthospital.com",
      notifications: true,
      darkMode: true,
    });
  };

  return (
    <div className="p-10 text-white">

      <h1 className="text-5xl font-bold">
        Settings
      </h1>

      <p className="text-gray-300 mt-2 mb-8">
        Configure hospital preferences
      </p>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 space-y-6">

        <div>
          <label className="block mb-2">Hospital Name</label>
          <input
            type="text"
            name="hospitalName"
            value={settings.hospitalName}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2">Hospital Address</label>
          <input
            type="text"
            name="address"
            value={settings.address}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2">Emergency Hotline</label>
          <input
            type="text"
            name="hotline"
            value={settings.hotline}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2">Hospital Email</label>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3"
          />
        </div>

        <div className="flex justify-between items-center">
          <span>Enable Notifications</span>

          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <span>Dark Mode</span>

          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-4 pt-4">

          <button
            onClick={saveSettings}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Save Settings
          </button>

          <button
            onClick={resetSettings}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}