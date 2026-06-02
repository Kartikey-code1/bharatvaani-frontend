import { useState } from "react";

export default function AdminLogin() {
  // 1. Inputs ki value store karne ke liye states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 2. Login Submit function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    setError("");
    setLoading(true);

    try {
      // Apne backend ke mutabik sahi login URL check kar lena (jaise /api/auth/login ya jo bhi ho)
      const response = await fetch("http://localhost:5000/api/admin/login", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed! Please check credentials.");
      }

      // Successful login par Token store karein
      localStorage.setItem("adminToken", data.token);
      alert("Login Successful! 🎉");
      
      // Dashboard par bhejne ke liye (Agar Next.js hai toh useRouter use karein, React hai toh useNavigate)
      window.location.href = "/admin/dashboard"; 

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-md mx-auto bg-white mt-12 p-6 rounded-3xl shadow">
      <h1 className="text-3xl font-black mb-4">Admin Login</h1>
      
      {/* Agar koi error aayega toh screen par dikhega */}
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded mb-3 text-sm font-semibold border border-red-200">
          {error}
        </div>
      )}
      
      {/* Inputs ko form tag ke andar wrap kiya taaki Enter press karne par bhi submit ho jaye */}
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