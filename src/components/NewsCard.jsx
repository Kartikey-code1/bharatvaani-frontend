import { Link } from 'react-router-dom';
import brandLogo from '../assets/logo.png'; 

export default function NewsCard({ item }) {
  const hasVideo = item.video && item.video.trim() !== "";
  const defaultPlaceholder = brandLogo; 

  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden flex flex-col h-full group relative border border-gray-100">

      {/* Media Window Container */}
      <div className="w-full h-52 overflow-hidden bg-black relative block">
        
        {/* 👑 BHARATVAANI NO-BACKGROUND PURE LOGO ENGINE
            - 'bg-transparent' lagaya hai taaki peeche ka koi bhi safed patch bilkul gayab ho jaye.
            - Padding 'p-0' ki hai taaki mask border line tak touch ho.
            - Border lines clear kar di hain taaki card natural overlay dikhe.
            - Width aur height ko perfect proportional matching di hai. */}
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