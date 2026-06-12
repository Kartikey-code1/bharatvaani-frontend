import { Link } from 'react-router-dom';
// 👑 FIX: src/assets/logo.png ko upar import kar liya taaki dynamic build broke na ho
import brandLogo from '../assets/logo.png'; 

export default function NewsCard({ item }) {
  const hasVideo = item.video && item.video.trim() !== "";
  
  // Agal-bagal koi khabar bina image ke aaye toh default mein bhi tumhara logo chamkega
  const defaultPlaceholder = brandLogo; 

  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden flex flex-col h-full group relative border border-gray-100">

      {/* Media Window Container */}
      <div className="w-full h-52 overflow-hidden bg-black relative block">
        
        {/* 👑 BHARATVAANI ABSOLUTE OVERLAP MASK */}
        <div 
          className="absolute top-2 right-2 z-50 bg-white p-1 rounded-full shadow-md flex items-center justify-center border border-gray-200"
          style={{ width: '44px', height: '44px', minWidth: '44px', minHeight: '44px' }}
        >
          <img 
            src={brandLogo} // 👈 Imported asset logo file here
            alt="Bharatvaani" 
            className="w-full h-full object-contain rounded-full"
            style={{ display: 'block' }}
          />
        </div>

        {hasVideo ? (
          <video
            src={item.video}
            controls
            preload="metadata"
            className="w-full h-full object-contain relative z-10"
            poster={item.image || defaultPlaceholder}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={item.image || defaultPlaceholder}
            alt={item.headline || item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.target.src = defaultPlaceholder; }}
          />
        )}
      </div>

      {/* Description Body */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-white relative z-20">
        <div>
          <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
            {item.category || "National"}
          </span>

          <Link to={`/article/${item._id || item.slug}`}>
            <h3 className="font-bold text-base mt-1 mb-3 line-clamp-2 text-gray-800 hover:text-red-700 transition-colors cursor-pointer">
              {item.headline || item.title}
            </h3>
          </Link>
        </div>

        <Link
          to={`/article/${item._id || item.slug}`}
          className="text-red-700 font-bold text-sm inline-block hover:underline mt-2 self-start"
        >
          पूरा समाचार पढ़ें →
        </Link>
      </div>

    </article>
  );
}