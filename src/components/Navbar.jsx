import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categoriesList = [
    'Politics', 'National', 'Environment', 'Business', 'Technology', 
    'Sports', 'Entertainment', 'Lifestyle', 'Crime', 'Education'
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* LOGO GROUP */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="relative flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold text-xl tracking-wider shadow-md">
            <span className="font-serif">B</span>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-900 rounded-full border-2 border-white flex items-center justify-center text-[10px]">
              P
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-none font-sans">
              BHARATVAANI
            </h1>
            <h2 className="text-xl font-extrabold tracking-widest text-red-600 leading-none mt-1">
              PRANGAN
            </h2>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center space-x-8 font-sans">
          <Link to="/" className="text-sm font-bold text-red-600 border-b-2 border-red-600 pb-1 tracking-wide">
            HOME
          </Link>
          
          {/* News Trigger */}
          <div className="relative">
            <button 
              onClick={() => { setIsNewsOpen(!isNewsOpen); setIsCategoriesOpen(false); }}
              className="flex items-center space-x-1 text-sm font-bold text-slate-700 hover:text-red-600 transition-colors tracking-wide uppercase"
            >
              <span>News</span>
              <FiChevronDown className={`w-4 h-4 transition-transform ${isNewsOpen ? 'rotate-180' : ''}`} />
            </button>
            {isNewsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-2 z-50">
                <Link to="/news/breaking" onClick={() => setIsNewsOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 font-bold hover:text-red-600">
                  Breaking News
                </Link>
                <Link to="/news/top-stories" onClick={() => setIsNewsOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 font-bold hover:text-red-600">
                  Top Stories
                </Link>
              </div>
            )}
          </div>

          {/* Categories Dropdown Trigger */}
          <div className="relative">
            <button 
              onClick={() => { setIsCategoriesOpen(!isCategoriesOpen); setIsNewsOpen(false); }}
              className="flex items-center space-x-1 text-sm font-bold text-slate-700 hover:text-red-600 transition-colors tracking-wide uppercase"
            >
              <span>Categories</span>
              <FiChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg py-2 grid grid-cols-1 z-50">
                {categoriesList.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/category/${cat.toLowerCase()}`}
                    onClick={() => setIsCategoriesOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 font-medium hover:text-red-600"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/videos" className="text-sm font-bold text-slate-700 hover:text-red-600 transition-colors tracking-wide uppercase">
            Videos
          </Link>
          <Link to="/about" className="text-sm font-bold text-slate-700 hover:text-red-600 transition-colors tracking-wide uppercase">
            About Us
          </Link>
        </nav>

        {/* Live TV */}
        <div className="flex items-center">
          <Link to="/live-tv" className="relative overflow-hidden bg-red-600 hover:bg-red-700 text-white font-sans font-extrabold text-xs tracking-wider px-5 py-2.5 rounded-md shadow-md shadow-red-200 uppercase transition-all flex items-center space-x-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>Live TV</span>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;