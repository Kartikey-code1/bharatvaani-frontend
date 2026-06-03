import { useState } from "react";

export default function Dashboard() {
  const [article, setArticle] = useState({
    title: "",
    category: "Politics",
    content: "",
    image: null,
    video: null,
  });
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    if (!article.title || !article.content) {
      alert("Title aur Content zaroori hai!");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", article.title);
      formData.append("category", article.category);
      formData.append("content", article.content);

      if (article.image) formData.append("image", article.image);
      if (article.video) formData.append("video", article.video);

      // Backend ka live URL use karein
      const response = await fetch(
        "https://bharatvaani-backend.onrender.com/api/articles",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("✅ Article Published Successfully");
        setArticle({
          title: "",
          category: "Politics",
          content: "",
          image: null,
          video: null,
        });
      } else {
        alert(data.message || "❌ Publish Failed");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server Error: Backend se connect nahi ho pa raha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {["Total Articles", "Published", "Drafts", "Subscribers"].map((item) => (
          <div key={item} className="bg-white shadow rounded-xl p-4">
            <h3>{item}</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        ))}
      </div>

      {/* Create Article Form */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Create News Article</h2>

        <input
          type="text"
          placeholder="News Title"
          className="w-full border rounded p-3 mb-4"
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
        />

        <select
          className="w-full border rounded p-3 mb-4"
          value={article.category}
          onChange={(e) => setArticle({ ...article, category: e.target.value })}
        >
          <option>Politics</option>
          <option>National</option>
          <option>Sports</option>
          <option>Technology</option>
          <option>Business</option>
          <option>Entertainment</option>
          <option>Crime</option>
          <option>Education</option>
        </select>

        <textarea
          rows="12"
          placeholder="Write complete article..."
          className="w-full border rounded p-3 mb-4"
          value={article.content}
          onChange={(e) => setArticle({ ...article, content: e.target.value })}
        />

        <div className="mb-4">
          <label className="font-semibold block mb-2">Upload Image</label>
          <input type="file" accept="image/*" onChange={(e) => setArticle({ ...article, image: e.target.files[0] })} />
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-2">Upload Video</label>
          <input type="file" accept="video/*" onChange={(e) => setArticle({ ...article, video: e.target.files[0] })} />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="bg-gray-700 text-white px-5 py-3 rounded">Save Draft</button>
          <button
            onClick={handlePublish}
            disabled={loading}
            className={`px-5 py-3 rounded text-white ${loading ? "bg-blue-300" : "bg-blue-600"}`}
          >
            {loading ? "Publishing..." : "Publish Website Only"}
          </button>
          <button className="bg-red-600 text-white px-5 py-3 rounded">Publish Everywhere</button>
        </div>
      </div>
    </div>
  );
}