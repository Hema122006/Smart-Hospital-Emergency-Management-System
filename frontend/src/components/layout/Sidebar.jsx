import {
  LayoutDashboard,
  Siren,
  ClipboardList,
  Bell,
  UserRound,
  Bed,
  Ambulance,
  Stethoscope,
  Package,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo/logo.png";

import { Droplets } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="w-72 h-screen bg-[#071A35]/90 backdrop-blur-xl border-r border-blue-900 text-white flex flex-col">

      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-blue-900">
        <img src={logo} alt="Logo" className="w-12 h-12" />

        <div>
          <h1 className="font-bold text-xl leading-5">
            SMART HOSPITAL
          </h1>

          <p className="text-xs text-blue-300">
            Emergency Management
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">

        <Menu title="Dashboard">
  <Link to="/">
    <Item
      icon={<LayoutDashboard size={20} />}
      text="Dashboard"
      active={location.pathname === "/"}
    />
  </Link>
</Menu>

        <Menu title="Emergency">
  <Link to="/new-emergency">
    <Item
      icon={<Siren size={20} />}
      text="New Emergency"
      active={location.pathname === "/new-emergency"}
    />
  </Link>

  <Link to="/all-emergencies">
  <Item
    icon={<ClipboardList size={20} />}
    text="All Emergencies"
    active={location.pathname === "/all-emergencies"}
  />
</Link>

<Link to="/blood-bank">
  <Item
    icon={<Droplets size={20} />}
    text="Blood Bank"
    active={location.pathname === "/blood-bank"}
  />
</Link>
  <Link to="/priority-triage">
  <Item
    icon={<Bell size={20} />}
    text="Priority Triage"
    active={location.pathname === "/priority-triage"}
  />
</Link>
  <Link to="/alerts">
  <Item
    icon={<Bell size={20} />}
    text="Alerts"
    active={location.pathname === "/alerts"}
  />
</Link>
</Menu>

        <Menu title="Resources">
          <Link to="/doctors">
  <Item
    icon={<UserRound size={20} />}
    text="Doctors"
    active={location.pathname === "/doctors"}
  />
</Link>
          <Link to="/icu-beds">
  <Item
    icon={<Bed size={20} />}
    text="ICU Beds"
    active={location.pathname === "/icu-beds"}
  />
</Link>
          <Link to="/ambulances">
  <Item
    icon={<Ambulance size={20} />}
    text="Ambulances"
    active={location.pathname === "/ambulances"}
  />
</Link>
          <Link to="/nurses">
  <Item
    icon={<Stethoscope size={20} />}
    text="Nurses"
    active={location.pathname === "/nurses"}
  />
</Link>
          <Link to="/equipment">
  <Item
    icon={<Package size={20} />}
    text="Equipment"
    active={location.pathname === "/equipment"}
  />
</Link>
        </Menu>

        <Menu title="Reports">
          <Link to="/analytics">
    <Item
        icon={<BarChart3 size={20}/>}
        text="Analytics"
        active={location.pathname==="/analytics"}
    />
</Link>
        </Menu>

        <Menu title="System">
          <Link to="/settings">
  <Item
    icon={<Settings size={20} />}
    text="Settings"
    active={location.pathname === "/settings"}
  />
</Link>
          <Link to="/logout">
  <Item
    icon={<LogOut size={20} />}
    text="Logout"
    active={location.pathname === "/logout"}
  />
</Link>
        </Menu>

      </nav>

      <div className="m-4 rounded-xl bg-red-600/20 border border-red-500 p-4">
        <h3 className="font-semibold">Emergency Hotline</h3>

        <p className="text-3xl font-bold text-red-400 mt-2">
          108
        </p>

        <p className="text-sm text-gray-300">
          24×7 Available
        </p>
      </div>
    </aside>
  );
}

function Menu({ title, children }) {
  return (
    <div className="mb-6">
      <p className="text-xs uppercase tracking-wider text-blue-300 mb-3">
        {title}
      </p>

      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

function Item({ icon, text, active }) {
  return (
    <div
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
        active
          ? "bg-blue-600 text-white"
          : "hover:bg-blue-900/50 text-gray-300"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}