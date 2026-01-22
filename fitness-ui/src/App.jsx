import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Running from "./pages/Running";
import Workouts from "./pages/Workouts";
import Protein from "./pages/Protein";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/running" element={<Running />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/protein" element={<Protein />} />
    </Routes>
  );
}

export default App;
