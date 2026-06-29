import { Link } from "react-router-dom";

export default function LatestNews({ news }) {
  if (!news || news.length === 0) return null;

  return (
    <div className="latest-news">

      <div className="latest-header">
        Latest News
      </div>

      {news.map((item) => (
        <Link
          key={item._id}
          to={`/article/${item._id}`}
          className="latest-item"
        >
          <img
            src={
              item.image ||
              item.thumbnail ||
              "https://via.placeholder.com/120x80"
            }
            alt={item.title}
          />

          <div className="latest-content">

            <span className="latest-category">
              {item.category || "News"}
            </span>

            <h4>{item.title}</h4>

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