import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-6 w-full"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-purple-700 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
