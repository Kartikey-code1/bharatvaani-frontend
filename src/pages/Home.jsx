import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CATEGORIES = ["All", "Politics", "National", "Sports", "Entertainment", "Business", "Technology", "Crime", "Education"];

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  useEffect(() => {
    // FIX: Localhost hatakar live Render backend URL ka use kiya hai
    fetch("https://bharatvaani-backend.onrender.com/api/articles")
      .then((res) => res.json())
      .then((data) => {
        // Backend se aaye data ko verify kiya
        if (Array.isArray(data)) {
          setNews(data);
        } else if (data.articles && Array.isArray(data.articles)) {
          // Agar backend 'data.articles' field bhej raha hai
          setNews(data.articles);
        } else {
          setNews([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("FETCH ERROR:", error);
        setLoading(false);
      });
  }, []);

  const filteredNews = activeCategory === "All"
    ? news
    : news.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {loading ? (
        <h2 className="text-center text-xl mt-10">Loading News...</h2>
      ) : filteredNews.length === 0 ? (
        <h2 className="text-center text-xl mt-10">No News Found</h2>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-700 pl-3">
            {activeCategory === "All" ? "Latest News" : activeCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <NewsCard key={item._id} item={item} />
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default Home;