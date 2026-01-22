import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h2>Login Page</h2>
      <button onClick={() => navigate("/dashboard")}>
        Login
      </button>
    </div>
  );
}
