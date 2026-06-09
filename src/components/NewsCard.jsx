import { Link } from 'react-router-dom';

export default function NewsCard({ item }) {
  // Check karo ki kya such mein koi video file (.mp4, etc.) uploaded hai
  const hasVideo = item.video && item.video.trim() !== "";

  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden flex flex-col h-full">

      {/* Media Section: Video ya Image automatic switch hoga */}
      <div className="w-full h-52 overflow-hidden bg-black relative">
        {hasVideo ? (
          /* 🔥 AGAR VIDEO HAI: Toh properly video play hogi bina kisi blur jhol ke */
          <video
            src={item.video}
            controls
            preload="metadata"
            className="w-full h-full object-contain"
            poster={item.image || "https://picsum.photos/500/300"}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          /* 📷 AGAR VIDEO NAHI HAI: Toh normal image dikhegi */
          <img
            src={item.image || "https://picsum.photos/500/300"}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-xs font-bold text-red-700 uppercase">
            {item.category}
          </span>

          <Link to={`/article/${item._id}`}>
            <h3 className="font-bold text-lg mt-1 mb-3 line-clamp-2 hover:text-red-700 cursor-pointer">
              {item.title}
            </h3>
          </Link>
        </div>

        <Link
          to={`/article/${item._id}`}
          className="text-red-700 font-semibold text-sm inline-block hover:underline mt-2 self-start"
        >
          पूरा समाचार पढ़ें →
        </Link>
      </div>

    </article>
  );
}