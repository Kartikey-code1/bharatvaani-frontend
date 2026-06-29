import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  return (
    <Link
      to={`/article/${item._id || item.slug}`}
      className="featured-card"
    >
      <div className="featured-image">
        <img
          src={
            item.image ||
            item.thumbnail ||
            "https://via.placeholder.com/600x400"
          }
          alt={item.title || item.headline}
        />

        <span className="featured-category">
          {item.category || "News"}
        </span>
      </div>

      <div className="featured-content">
        <h3>{item.title || item.headline}</h3>

        <p>
          {item.description ||
            item.shortDescription ||
            "Read the full story..."}
        </p>
      </div>
    </Link>
  );
}