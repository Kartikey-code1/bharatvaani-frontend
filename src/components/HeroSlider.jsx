import { Link } from "react-router-dom";

export default function HeroSlider({ article }) {
  if (!article) return null;

  const image =
    article.image ||
    article.thumbnail ||
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1400";

  return (
    <div className="hero-slider">

      <img src={image} alt={article.title} />

      <div className="hero-overlay">

        <span className="hero-tag">
          TOP STORY
        </span>

        <h1>
          {article.title}
        </h1>

        <p>
          {article.description?.substring(0,180)}...
        </p>

        <Link
          to={`/article/${article._id}`}
          className="hero-btn"
        >
          READ MORE
        </Link>

      </div>

    </div>
  );
}