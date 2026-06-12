import { Link } from 'react-router-dom';
import brandLogo from '../assets/logo.png'; 

export default function NewsCard({ item }) {
  const hasVideo = item.video && item.video.trim() !== "";
  const defaultPlaceholder = brandLogo; 

  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden flex flex-col h-full group relative border border-gray-100">

      {/* Media Window Container */}
      <div className="w-full h-52 overflow-hidden bg-black relative block">
        
        {/* 👑 BHARATVAANI PERFECT SQUARE MASK 
            - 'rounded-none' se border gol nahi hoga, ekदम chaukona box banega.
            - Width ko 'w-16' (64px) aur height ko 'h-8' (32px) kiya hai taaki ABP ka lamba text completely hide ho jaye.
            - Right aur Top ko 'right-0 top-0' kiya hai taaki edge to edge block kare. */}
        <div 
          className="absolute top-0 right-0 z-50 bg-white p-0.5 shadow-md flex items-center justify-center border-l border-b border-gray-200 rounded-none"
          style={{ width: '68px', height: '34px', minWidth: '68px', minHeight: '34px' }}
        >
          <img 
            src={brandLogo} 
            alt="Bharatvaani" 
            className="w-full h-full object-contain rounded-none"
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