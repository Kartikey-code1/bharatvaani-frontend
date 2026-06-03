import { useState } from "react";
import { api } from "../services/api"; // Ye zaroori hai!

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
     // AdminLogin.jsx ke andar:
const response = await api.post("/api/admin/login", { 
  email, 
  password 
});

      // Axios mein response data seedha .data mein hota hai
      const data = response.data;

      // Successful login
      localStorage.setItem("adminToken", data.token);
      alert("Login Successful! 🎉");
      
      window.location.href = "/admin/dashboard"; 

    } catch (err) {
      // Axios error handle karne ka tareeka
      setError(err.response?.data?.message || "Login failed! Please check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-md mx-auto bg-white mt-12 p-6 rounded-3xl shadow">
      <h1 className="text-3xl font-black mb-4">Admin Login</h1>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded mb-3 text-sm font-semibold border border-red-200">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <input 
          className="border p-3 rounded w-full mb-3 focus:outline-red-700" 
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input 
          className="border p-3 rounded w-full mb-3 focus:outline-red-700" 
          placeholder="Password" 
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button 
          type="submit"
          disabled={loading}
          className="bg-red-700 hover:bg-red-800 disabled:bg-gray-400 text-white p-3 rounded w-full font-bold transition-colors"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
}