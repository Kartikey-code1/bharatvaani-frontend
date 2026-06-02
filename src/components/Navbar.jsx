import { Link, useNavigate } from "react-router-dom";

const cats = [
  "Politics",
  "National",
  "Sports",
  "Entertainment",
  "Business",
  "Technology",
  "Crime",
  "Education",
];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow sticky top-0 z-50 border-b border-gray-200">
      
      {/* TOP HEADER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="leading-none">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
              <span className="text-orange-500">भारत</span>
              <span className="mx-1"></span>
              <span className="text-green-600">वाणी</span>
            </h1>

            <div className="ml-10 sm:ml-14 md:ml-20 -mt-1">
              <span className="text-green-500 text-lg sm:text-xl md:text-2xl font-black">
                प्रांगण
              </span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-black">
          <Link
            to="/about"
            className="hover:text-red-600 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-red-600 transition"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* CATEGORY BAR */}
      <div className="border-t bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-4 px-3 sm:px-4 py-3 text-sm whitespace-nowrap">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => navigate(`/?category=${c}`)}
              className="text-black hover:text-red-600 transition font-medium"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* BREAKING NEWS */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 overflow-hidden py-2">
        <div className="max-w-7xl mx-auto flex items-center px-3 sm:px-4">
          <span className="text-white font-bold text-xs sm:text-sm mr-3 shrink-0">
            BREAKING
          </span>

          <p className="text-white text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
            Bharatvaani Prangan पर पढ़ें ताज़ा, भरोसेमंद और people-focused journalism.
          </p>
        </div>
      </div>
    </header>
  );
}