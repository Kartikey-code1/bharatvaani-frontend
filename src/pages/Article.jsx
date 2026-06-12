import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// 👑 FIX: Logo asset ko top par import kiya full view ke liye
import brandLogo from "../assets/logo.png";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Localhost hata kar tumhara live Render URL daal diya hai
    fetch(`https://bharatvaani-backend.onrender.com/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        Loading...
      </div>
    );
  }

  if (!article || article.message) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        Article not found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Back Button */}
        <Link
          to="/"
          className="text-red-700 font-semibold text-sm hover:underline"
        >
          ← Back
        </Link>

        {/* Category */}
        <p className="text-xs font-bold text-red-700 uppercase mt-4">
          {article.category}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Date */}
        <p className="text-sm text-gray-400 mb-6">
          {article.publishedAt
            ? new Date(article.publishedAt).toLocaleString("hi-IN")
            : "ताज़ा समाचार"}
        </p>

        {/* 👑 Image With Logo Mask */}
        {article.image && (
          <div className="relative w-full rounded-xl overflow-hidden mb-6 bg-black block">
            {/* Edge-to-edge Custom Borderless Mask */}
            <div 
              className="absolute top-0 right-0 z-50 bg-transparent p-0 flex items-center justify-center rounded-none overflow-hidden"
              style={{ width: '85px', height: '42px', minWidth: '85px', minHeight: '42px' }}
            >
              <img 
                src={brandLogo} 
                alt="Bharatvaani" 
                className="w-full h-full object-cover rounded-none block"
                style={{ backgroundColor: 'transparent' }} 
              />
            </div>
            <img
              src={article.image}
              alt={article.title}
              className="w-full object-cover max-h-96 block"
            />
          </div>
        )}

        {/* 👑 Video With Logo Mask */}
        {article.video && (
          <div className="relative w-full rounded-xl overflow-hidden mb-6 bg-black block">
            {/* Edge-to-edge Custom Borderless Mask */}
            <div 
              className="absolute top-0 right-0 z-50 bg-transparent p-0 flex items-center justify-center rounded-none overflow-hidden"
              style={{ width: '85px', height: '42px', minWidth: '85px', minHeight: '42px' }}
            >
              <img 
                src={brandLogo} 
                alt="Bharatvaani" 
                className="w-full h-full object-cover rounded-none block"
                style={{ backgroundColor: 'transparent' }} 
              />
            </div>
            <video
              src={article.video}
              controls
              className="w-full max-h-96 block relative z-10"
            />
          </div>
        )}

        {/* Content */}
        <div className="text-gray-800 text-lg leading-8 whitespace-pre-line">
          {article.content || article.description}
        </div>

      </div>
    </div>
  );
}

export default Article;