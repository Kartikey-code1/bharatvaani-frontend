import { Link } from "react-router-dom";

export default function FeaturedNews({ news }) {
  if (!news || news.length === 0) return null;

  return (
    <div className="featured-grid">
      {news.map((item) => (
        <Link
          key={item._id}
          to={`/article/${item._id}`}
          className="featured-card"
        >
          <div className="featured-image">

            <img
              src={
                item.image ||
                item.thumbnail ||
                "https://via.placeholder.com/500x300"
              }
              alt={item.title}
            />

            <span className="featured-category">
              {item.category || "News"}
            </span>

          </div>

          <div className="featured-content">

            <h3>{item.title}</h3>

            <p>
              {item.description
                ? item.description.substring(0, 100) + "..."
                : ""}
            </p>

            <small>
              {item.createdAt
                ? new Date(item.createdAt).toLocaleDateString("en-IN")
                : ""}
            </small>

          </div>

        </Link>
      ))}
    </div>
  );
}