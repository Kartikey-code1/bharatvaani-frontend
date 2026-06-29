import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard.jsx';

export default function Category() {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      setLoading(true);
      setError(null);
      try {
        // Tumhare hosted environment ki category filtering API
        // Agar absolute URL lagana ho toh `/api/articles...` ya jo bhi tumhara custom route hai use update kar sakte ho
        const response = await fetch(`/api/articles/category/${name}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("इस कैटेगरी में समाचार लोड करने में असमर्थ।");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryNews();
  }, [name]); // Jab bhi category ka 'name' change hoga, ye fetch function fir se run hoga

  return (
    <main className="max-w-7xl mx-auto p-4 min-h-[60vh]">
      {/* Category Heading Display */}
      <h1 className="text-4xl font-black my-6 capitalize border-b-2 border-red-600 pb-2 inline-block">
        {name} News
      </h1>

      {/* Loading Skeleton state */}
      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-pulse mt-4">
          {[1, 2, 4, 4].map((n) => (
            <div key={n} className="bg-gray-200 h-72 rounded-lg"></div>
          ))}
        </div>
      )}

      {/* Error state tracking */}
      {error && !loading && (
        <div className="text-center py-10 text-gray-500 font-medium">
          {error}
        </div>
      )}

      {/* Real Live Database Posts Output Grid */}
      {!loading && !error && items.length > 0 ? (
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {items.map((newsItem, index) => (
            <NewsCard key={newsItem._id || index} item={newsItem} />
          ))}
        </section>
      ) : (
        !loading && !error && (
          <div className="text-center py-12 text-gray-400 font-medium">
            इस कैटेगरी में अभी कोई समाचार उपलब्ध नहीं है।
          </div>
        )
      )}
    </main>
  );
}