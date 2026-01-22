import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(u => u.username === username);
    if (userExists) {
      alert("User already exists. Please login.");
      navigate("/login");
      return;
    }

    users.push({
      username,
      password,
      data: {
        running: [],
        workouts: [],
        protein: []
      }
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully. Please login.");
    navigate("/login");
  };

  return (
    <div className="center">
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
