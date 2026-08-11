import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    sessionStorage.clear();

    alert("Logged out successfully ✅");

    // Redirect to Dashboard (change to "/login" later if login page exists)
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="p-10 flex justify-center items-center min-h-screen">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 w-[500px] text-center text-white">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
            <LogOut size={40} />
          </div>
        </div>

        <h1 className="text-3xl font-bold">
          Logout
        </h1>

        <p className="text-gray-300 mt-4">
          Are you sure you want to logout from Smart Hospital Emergency Management System?
        </p>

        <div className="flex justify-center gap-5 mt-8">

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
          >
            Logout
          </button>

          <button
            onClick={handleCancel}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}