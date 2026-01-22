import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      <button onClick={() => navigate("/running")}>Running</button>
      <br /><br />

      <button onClick={() => navigate("/workouts")}>Workouts</button>
      <br /><br />

      <button onClick={() => navigate("/protein")}>Protein</button>
    </div>
  );
}