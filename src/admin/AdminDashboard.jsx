import { useState } from "react";

export default function Dashboard() {
  const [article, setArticle] = useState({
    title: "",
    category: "Politics",
    content: "",
    image: null,
    video: null,
  });

  const handlePublish = async () => {
    try {
      const formData = new FormData();

      formData.append("title", article.title);
      formData.append("category", article.category);
      formData.append("content", article.content);

      if (article.image) {
        formData.append("image", article.image);
      }

      if (article.video) {
        formData.append("video", article.video);
      }

      const response = await fetch(
        "http://localhost:5000/api/articles",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

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
      alert("❌ Server Error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow rounded-xl p-4">
          <h3>Total Articles</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h3>Published</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h3>Drafts</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h3>Subscribers</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          Create News Article
        </h2>

        <input
          type="text"
          placeholder="News Title"
          className="w-full border rounded p-3 mb-4"
          value={article.title}
          onChange={(e) =>
            setArticle({
              ...article,
              title: e.target.value,
            })
          }
        />

        <select
          className="w-full border rounded p-3 mb-4"
          value={article.category}
          onChange={(e) =>
            setArticle({
              ...article,
              category: e.target.value,
            })
          }
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
          onChange={(e) =>
            setArticle({
              ...article,
              content: e.target.value,
            })
          }
        />

        <div className="mb-4">
          <label className="font-semibold block mb-2">
            Upload Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setArticle({
                ...article,
                image: e.target.files[0],
              })
            }
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-2">
            Upload Video
          </label>

          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              setArticle({
                ...article,
                video: e.target.files[0],
              })
            }
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="bg-gray-700 text-white px-5 py-3 rounded">
            Save Draft
          </button>

          <button
            onClick={handlePublish}
            className="bg-blue-600 text-white px-5 py-3 rounded"
          >
            Publish Website Only
          </button>

          <button className="bg-red-600 text-white px-5 py-3 rounded">
            Publish Everywhere
          </button>
        </div>
      </div>
    </div>
  );
}