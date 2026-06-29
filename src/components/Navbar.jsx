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
        
        {/* 1. BRANDING LOGO SECTION (NEW DESIGN MATCH) */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer group">
          {/* Logo Icon Element */}
          <div className="relative flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold text-xl tracking-wider shadow-md">
            <span className="font-serif">B</span>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-900 rounded-full border-2 border-white flex items-center justify-center text-[10px]">
              P
            </div>
          </div>
          
          {/* Updated Text Group matching the new typography & accents */}
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[22px] font-black tracking-[0.03em] text-[#111827] leading-none uppercase font-sans">
              BHARATVAANI
            </h1>
            
            {/* Prangan with Triple Horizontal Accent Lines */}
            <div className="flex items-center justify-between w-full mt-1 px-0.5">
              {/* Left Accent Lines */}
              <div className="flex flex-col space-y-[2px] w-3">
                <div className="h-[2px] w-full bg-red-600"></div>
                <div className="h-[2px] w-full bg-red-600"></div>
                <div className="h-[2px] w-full bg-red-600"></div>
              </div>
              
              {/* Center Text */}
              <span className="text-[13px] font-black tracking-[0.38em] text-red-600 leading-none pl-1 uppercase font-sans">
                PRANGAN
              </span>
              
              {/* Right Accent Lines */}
              <div className="flex flex-col space-y-[2px] w-3">
                <div className="h-[2px] w-full bg-red-600"></div>
                <div className="h-[2px] w-full bg-red-600"></div>
                <div className="h-[2px] w-full bg-red-600"></div>
              </div>
            </div>
          </div>
        </Link>

        {/* 2. NAVIGATION LINKS ELEMENT */}
        <nav className="hidden lg:flex items-center space-x-8 font-sans">
          <Link to="/" className="text-sm font-bold text-red-600 border-b-2 border-red-600 pb-1 tracking-wide">
            HOME
          </Link>
          
          {/* News Dropdown */}
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

          {/* Categories Dropdown */}
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
                    to={`/category/${cat}`}
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

        {/* 3. ACTION RIGHT PANEL */}
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