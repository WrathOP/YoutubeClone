import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router";

import { Sidebar, SidebarItem } from "./components/sidebar";
import {
  LayoutDashboard,
  StickyNote,
  Layers,
  Settings,
  LifeBuoy,
} from "lucide-react";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Toggle from "./components/UI-Components/toggle";
import Homepage from "./pages/homepage";
import Requisitions from "./pages/requisitions";

import "./App.css";

export default function App() {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setToggle(!toggle);
    dispatch({ type: "TOGGLE" });
  };

  const color = darkMode ? "white" : "black";
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} color={color} />}
            text="Dashboard"
            active={location.pathname.includes("/dashboard")}
            onClick={() => {
              // Send to the dashboard using the react dom router
              navigate("/dashboard");
            }}
          />
          <SidebarItem
            icon={<StickyNote size={20} color={color} />}
            text="All Requisitions"
            active={location.pathname.includes("/requisitions")}
            onClick={() => {
              // Send to the requisitions using the react dom router
              navigate("/requisitions");
            }}
          />
          <SidebarItem
            icon={<Layers size={20} color={color} />}
            text="Manage Candidates"
            active={location.pathname.includes("/candidates")}
            onClick={() => {
              // Send to the candidates using the react dom router
              navigate("/candidates");
            }}
          />
          <hr className="my-3" />
          <SidebarItem
            icon={<Settings size={20} color={color} />}
            text="Settings"
          />
          <SidebarItem
            icon={<LifeBuoy size={20} color={color} />}
            text="Help"
          />
          <Toggle onChange={toggleDarkMode} checked={toggle} />
        </Sidebar>
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Homepage />} />
            <Route path="/requisitions" element={<Requisitions />} />
            <Route path="/candidates" element={<div>Candidates</div>} />
            <Route path="*" element={<div>404 Not found</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
}
