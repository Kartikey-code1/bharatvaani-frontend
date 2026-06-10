import { Link } from 'react-router-dom';

export default function NewsCard({ item }) {
  const hasVideo = item.video && item.video.trim() !== "";
  
  const defaultPlaceholder = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop"; 
  
  // 🔥 BHARATVAANI LOGO LINK (Circular and structured wrapper)
  const bharatvaaniLogo = "https://i.ibb.co/6N69wVJ/bharatvaani-logo.png"; 

  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden flex flex-col h-full group relative">

      {/* Media Window Container */}
      <div className="w-full h-52 overflow-hidden bg-black relative">
        
        {/* 👑 LOGO WATERMARK: Ekदम top-right corner, circle mesh framework aur drop-shadow ke sath */}
        <div className="absolute top-3 right-3 z-30 pointer-events-none bg-black/40 p-1 rounded-full border border-white/20 backdrop-blur-sm shadow-md transition-transform duration-300 group-hover:scale-105">
          <img 
            src={bharatvaaniLogo} 
            alt="Bharatvaani" 
            className="w-10 h-10 object-cover rounded-full filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] opacity-95"
            onError={(e) => { e.target.parentNode.style.display = 'none'; }} 
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
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.target.src = defaultPlaceholder; }}
          />
        )}
      </div>

      {/* Title/Category Description Body */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
            {item.category}
          </span>

          <Link to={`/article/${item._id}`}>
            <h3 className="font-bold text-lg mt-1 mb-3 line-clamp-2 text-gray-800 hover:text-red-700 transition-colors cursor-pointer">
              {item.title}
            </h3>
          </Link>
        </div>

        <Link
          to={`/article/${item._id}`}
          className="text-red-700 font-bold text-sm inline-block hover:underline mt-2 self-start"
        >
          पूरा समाचार पढ़ें →
        </Link>
      </div>

    </article>
  );
}