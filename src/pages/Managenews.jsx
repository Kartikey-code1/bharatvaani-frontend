import { useEffect, useState } from "react";

export default function ManageNews() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Saari news load karne ka function
  const fetchAllNews = async () => {
    try {
      const response = await fetch("https://bharatvaani-backend.onrender.com/api/articles");
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setNewsList(data);
      } else if (data.data && Array.isArray(data.data)) {
        setNewsList(data.data);
      }
    } catch (error) {
      console.error("News load karne mein dikkat aayi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  // 2. 🔥 DELETE NEWS FUNCTION (Backend endpoint call)
  const handleDelete = async (id, title) => {
    const confirmDelete = window.confirm(`⚠️ Kya aap sach mein "${title}" ko delete karna chahte hain?`);
    
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://bharatvaani-backend.onrender.com/api/articles/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("✅ News successfully delete ho gayi!");
        // State se delete hui news ko turant hata do taaki page refresh na karna pade
        setNewsList(newsList.filter((item) => item._id !== id));
      } else {
        alert("❌ Delete karne mein koi error aaya.");
      }
    } catch (error) {
      console.error("Delete request fail hui:", error);
      alert("❌ Server error: Backend se connect nahi ho paya.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-3xl shadow mt-8">
      <h1 className="text-3xl font-black mb-6 text-gray-800 border-b pb-4">Manage & Delete News</h1>

      {loading ? (
        <h2 className="text-center text-xl">Loading News List...</h2>
      ) : newsList.length === 0 ? (
        <h2 className="text-center text-xl text-gray-500">Website par koi news nahi mili.</h2>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3 font-bold text-sm text-gray-600">Image/Video</th>
                <th className="p-3 font-bold text-sm text-gray-600">Title</th>
                <th className="p-3 font-bold text-sm text-gray-600">Category</th>
                <th className="p-3 font-bold text-sm text-gray-600 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {newsList.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50 transition-colors">
                  {/* Media Thumbnail */}
                  <td className="p-3 w-24">
                    <div className="w-20 h-12 bg-gray-200 rounded overflow-hidden">
                      {item.video ? (
                        <span className="text-xs text-center block pt-3 bg-black text-white h-full">🎥 Video</span>
                      ) : (
                        <img 
                          src={item.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=100"} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </td>

                  {/* News Title */}
                  <td className="p-3 font-semibold text-gray-800 max-w-md">
                    <p className="line-clamp-2">{item.title}</p>
                  </td>

                  {/* Category */}
                  <td className="p-3 text-sm text-gray-500">
                    <span className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-bold">
                      {item.category}
                    </span>
                  </td>

                  {/* Delete Button */}
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(item._id, item.title)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}