import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import LatestNews from "../components/LatestNews";
import FeaturedNews from "../components/FeaturedNews";
// 👑 VIDEOS FIX: Apne component ko yahan import karo (agar naam alag hai toh change kar lena)
// import VideoSection from "../components/VideoSection"; 

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bharatvaani-backend.onrender.com/api/articles")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNews(data);
        } else if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          setNews([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        Loading News...
      </div>
    );
  }

  const hero = news[0] || null;
  const latest = news.slice(1, 6);
  const featured = news.slice(6, 10);
  // Example data agar videos fetch karne hain, nahi toh direct component load karo
  const videosData = news.slice(10, 14); 

  return (
    <div className="homepage">
      {/* 🛠️ MAIN HERO SECTION GRID */}
      <section className="hero-section">
        
        {/* LEFT COLUMN: Hero Slider aur Videos ab ek ke niche ek aayenge aur gap khatam ho jayega */}
        <div className="hero-left">
          <HeroSlider article={hero} />
          
          {/* 🎯 VIDEOS COMPONENT KO YAHAN RAKHO - Khali space khatam ho jayega */}
          {/* <VideoSection news={videosData} /> */}
          <div className="videos-section-placeholder" style={{ marginTop: '24px' }}>
            <div className="section-title">Videos</div>
            {/* Tumhara actual videos component ya slider yahan aayega */}
            <p style={{ color: '#666', fontStyle: 'italic' }}>[Yahan apna Video component render karo bhai]</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Latest News Sidebar */}
        <div className="hero-right">
          <LatestNews news={latest} />
        </div>
        
      </section>

      {/* FEATURED NEWS SECTION */}
      <section className="featured-section">
        <div className="section-title">
          Featured News
        </div>
        <FeaturedNews news={featured} />
      </section>
    </div>
  );
}