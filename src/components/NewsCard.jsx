import { Link } from 'react-router-dom';

export default function NewsCard({ item }) {
  const hasVideo = item.video && item.video.trim() !== "";
  
  const defaultPlaceholder = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop"; 
  
  // 🔥 BHARATVAANI PRANGAN LOGO LINK (Circular and structured wrapper)
  // Tip: Tumhara jo main logo hai (green/orange text wala), uski transparent PNG link yahan replace kar sakte ho
  const bharatvaaniLogo = "https://i.ibb.co/6N69wVJ/bharatvaani-logo.png"; 

  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden flex flex-col h-full group relative">

      {/* Media Window Container */}
      <div className="w-full h-52 overflow-hidden bg-black relative">
        
        {/* 👑 LOGO WATERMARK MASK OVERLAP ENGINE:
            Yeh div ekदम exact top-right area ko occupy karega jahan external channel logo aa raha hai.
            Isme p-1.5 aur custom size unke brand banner ko completely mask (chupa) dega. */}
        <div className="absolute top-2 right-2 z-40 bg-white border border-gray-200 p-1 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
          <img 
            src={bharatvaaniLogo} 
            alt="Bharatvaani" 
            className="w-9 h-9 object-contain rounded-full"
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
            alt={item.headline || item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.target.src = defaultPlaceholder; }}
          />
        )}
      </div>

      {/* Title/Category Description Body */}
      <div className="p-4 flex flex-col flex-grow justify-between">
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