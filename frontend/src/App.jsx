import hospitalBg from "./assets/images/hospital-bg.jpg";

import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import NewEmergency from "./pages/NewEmergency";
import AllEmergencies from "./pages/AllEmergencies";
import PriorityTriage from "./pages/PriorityTriage";
import Analytics from "./pages/Analytics";
import Doctors from "./pages/Doctors";
import ICUBeds from "./pages/ICUBeds";
import Ambulances from "./pages/Ambulances";
import Equipment from "./pages/Equipment";
import BloodBank from "./pages/BloodBank";
import Alerts from "./pages/Alerts";
import Nurses from "./pages/Nurses";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Login from "./pages/Login";

import { Routes, Route, Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProtectedPage({ children }) {
  return (
    <ProtectedRoute>
      <MainLayout>
        {children}
      </MainLayout>
    </ProtectedRoute>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hospitalBg})`,
        }}
      />

      {/* ================= BACKGROUND OVERLAY ================= */}
      <div className="fixed inset-0 bg-[#001b44]/55" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-screen">

         <Routes>

          {/* ================= LOGIN ================= */}

          <Route
            path="/login"
            element={<Login />}
          />


          {/* ================= PROTECTED PAGES ================= */}

          <Route
            path="/"
            element={
              <ProtectedPage>
                <Dashboard />
              </ProtectedPage>
            }
          />

          <Route
            path="/new-emergency"
            element={
              <ProtectedPage>
                <NewEmergency />
              </ProtectedPage>
            }
          />

          <Route
            path="/all-emergencies"
            element={
              <ProtectedPage>
                <AllEmergencies />
              </ProtectedPage>
            }
          />

          <Route
            path="/priority-triage"
            element={
              <ProtectedPage>
                <PriorityTriage />
              </ProtectedPage>
            }
          />

          <Route
            path="/analytics"
            element={
              <ProtectedPage>
                <Analytics />
              </ProtectedPage>
            }
          />

          <Route
            path="/doctors"
            element={
              <ProtectedPage>
                <Doctors />
              </ProtectedPage>
            }
          />

          <Route
            path="/icu-beds"
            element={
              <ProtectedPage>
                <ICUBeds />
              </ProtectedPage>
            }
          />

          <Route
            path="/ambulances"
            element={
              <ProtectedPage>
                <Ambulances />
              </ProtectedPage>
            }
          />

          <Route
            path="/equipment"
            element={
              <ProtectedPage>
                <Equipment />
              </ProtectedPage>
            }
          />

          <Route
            path="/blood-bank"
            element={
              <ProtectedPage>
                <BloodBank />
              </ProtectedPage>
            }
          />

          <Route
            path="/alerts"
            element={
              <ProtectedPage>
                <Alerts />
              </ProtectedPage>
            }
          />

          <Route
            path="/nurses"
            element={
              <ProtectedPage>
                <Nurses />
              </ProtectedPage>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedPage>
                <Settings />
              </ProtectedPage>
            }
          />

          <Route
            path="/logout"
            element={
              <ProtectedPage>
                <Logout />
              </ProtectedPage>
            }
          />


          {/* Unknown URL */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>

      </div>
    </div>
  );
}

export default App;