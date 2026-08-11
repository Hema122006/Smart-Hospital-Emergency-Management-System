import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, UserRound } from "lucide-react";
import { toast } from "react-toastify";
import { adminLogin } from "../services/authService";
import hospitalBg from "../assets/images/hospital-bg.jpg";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please enter username and password");
      return;
    }

    try {
      setLoading(true);

      const response = await adminLogin({
        username,
        password,
      });

      localStorage.setItem("admin", JSON.stringify(response.data));

      toast.success("Login Successful");

      navigate("/");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Invalid username or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
  style={{
    backgroundImage: `url(${hospitalBg})`,
  }}
>
    <div className="absolute inset-0 bg-black/65"></div>
    

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">

        <div className="text-center mb-8">

          <div className="w-20 h-20 mx-auto rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
            <LockKeyhole
              size={38}
              className="text-blue-400"
            />
          </div>

          <h1 className="text-4xl font-bold text-white">
            Admin Login
          </h1>

          <p className="text-gray-400 mt-2">
            Smart Hospital Emergency Management
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>

            <label className="text-gray-300">
              Username
            </label>

            <div className="flex items-center mt-2 bg-white/10 border border-white/20 rounded-xl">

              <UserRound
                size={20}
                className="ml-4 text-gray-400"
              />

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="w-full bg-transparent px-4 py-3 outline-none text-white"
              />

            </div>

          </div>

          <div>

            <label className="text-gray-300">
              Password
            </label>

            <div className="flex items-center mt-2 bg-white/10 border border-white/20 rounded-xl">

              <LockKeyhole
                size={20}
                className="ml-4 text-gray-400"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-transparent px-4 py-3 outline-none text-white"
              />

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 py-3 rounded-xl font-semibold text-white"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}