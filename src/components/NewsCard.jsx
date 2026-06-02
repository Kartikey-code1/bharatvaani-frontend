import { Link } from 'react-router-dom'

export default function NewsCard({ item }) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden">

      {/* Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={item.image || "https://picsum.photos/500/300"}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-bold text-red-700 uppercase">
          {item.category}
        </span>

        <Link to={`/article/${item._id}`}>
          <h3 className="font-bold text-lg mt-1 mb-3 line-clamp-2 hover:text-red-700 cursor-pointer">
            {item.title}
          </h3>
        </Link>

        <Link
          to={`/article/${item._id}`}
          className="text-red-700 font-semibold text-sm inline-block hover:underline"
        >
          पूरा समाचार पढ़ें →
        </Link>
      </div>

    </article>
  )
}