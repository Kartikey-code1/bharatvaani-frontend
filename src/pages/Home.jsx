import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import LatestNews from "../components/LatestNews";
import FeaturedNews from "../components/FeaturedNews";
import LatestNews from "../components/LatestNews";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bharatvaani-backend.onrender.com/api/articles")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNews(data);
        } else if (data.articles) {
          setNews(data.articles);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="loading">
        Loading News...
      </div>
    );

  const hero = news[0];
  const latest = news.slice(1, 6);
  const featured = news.slice(6, 10);

  return (
    <div className="homepage">

      <section className="hero-section">

        <div className="hero-left">
          <HeroSlider article={hero} />
        </div>

        <div className="hero-right">
          <LatestNews news={latest} />
        </div>

      </section>

      <section className="featured-section">

        <div className="section-title">
          Featured News
        </div>

        <FeaturedNews news={featured} />

      </section>

    </div>
  );
}