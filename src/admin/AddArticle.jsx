import { useState } from "react";

export default function AddArticle() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ title: "", content: "", category: "Politics" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Yahan API call aayegi (Dashboard.jsx ki tarah)
    try {
        const response = await fetch("https://bharatvaani-backend.onrender.com/api/articles", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) alert("Article Added Successfully!");
    } catch (err) {
        alert("Error adding article");
    } finally {
        setLoading(false);
    }
  };

  return (
    <main className='max-w-6xl mx-auto p-6 bg-white rounded-3xl shadow mt-8'>
      <h1 className='text-4xl font-black'>Add News Article</h1>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input 
            className="w-full border p-3 rounded" 
            placeholder="Title" 
            onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <textarea 
            className="w-full border p-3 rounded" 
            rows="10" 
            placeholder="Content"
            onChange={(e) => setFormData({...formData, content: e.target.value})}
        />
        <button 
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded font-bold"
        >
            {loading ? "Adding..." : "Publish Article"}
        </button>
      </form>
    </main>
  );
}