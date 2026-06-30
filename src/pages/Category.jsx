import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard.jsx';

export default function Category() {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState(''); // 🔥 Debug details check karne ke liye

  useEffect(() => {
    const fetchCategoryNews = async () => {
      setLoading(true);
      setError(null);
      setDebugInfo('');
      try {
        // Alag-alag tarike jo tumhara backend accept kar sakta hai (Ek-ek karke try karne ke liye)
        // 1. Agar tumhara backend lowercase parameters leta hai, toh name use karein.
        // 2. Agar backend strict uppercase leta hai, toh name.toUpperCase() use karein.
        const currentCategory = name ? name.toLowerCase() : ''; 
        
        // 🚨 YAHAN APNA ENDPOINT CHECK KAREIN: Agar pehle se koi working route pata ho toh change karein
        const targetUrl = `${window.location.origin}/api/articles/category/${currentCategory}`;
        
        setDebugInfo(`Fetching from: ${targetUrl}`);

        const response = await fetch(targetUrl);
        
        if (!response.ok) {
          throw new Error(`Server returned status: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("इस कैटेगरी में समाचार लोड करने में असमर्थ।");
        setDebugInfo(prev => `${prev} | Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchCategoryNews();
    }
  }, [name]); 

  return (
    <main className="max-w-7xl mx-auto p-4 min-h-[60vh]">
      {/* Category Heading Display */}
      <h1 className="text-4xl font-black my-6 capitalize border-b-2 border-red-600 pb-2 inline-block">
        {name} News
      </h1>

      {/* ⚠️ DEBUG BOX: Ye screen par hi dikha dega ki galti kahan hai */}
      {debugInfo && (
        <div className="bg-gray-100 border-l-4 border-amber-500 p-3 text-xs text-gray-700 font-mono my-4 break-all">
          <strong>Debug Log:</strong> {debugInfo}
        </div>
      )}

      {/* Loading Skeleton state */}
      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-pulse mt-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-gray-200 h-72 rounded-lg"></div>
          ))}
        </div>
      )}

      {/* Error state tracking */}
      {error && !loading && (
        <div className="text-center py-10 text-gray-500 font-medium</div>">
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