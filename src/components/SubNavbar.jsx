import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const SubNavbar = () => {
  const location = useLocation();
  
  // 1. EXACT match matching your dropdown and actual database categories
  const inlineCategories = [
    'Politics', 
    'National', 
    'Environment', // <-- 'World' ki jagah 'Environment' kiya jo dropdown mein hai
    'Business', 
    'Technology', 
    'Sports', 
    'Entertainment', 
    'Lifestyle', 
    'Crime', 
    'Education'
  ];

  return (
    <div className="w-full bg-red-700 text-white shadow-md border-t border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center overflow-x-auto no-scrollbar">
        
        {/* Home Link */}
        <Link 
          to="/" 
          className={`flex items-center justify-center h-11 px-4 border-r border-red-800 transition-colors hover:bg-red-800 ${location.pathname === '/' ? 'bg-red-900' : ''}`}
        >
          <FiHome className="w-4 h-4 text-white" />
        </Link>

        {/* Categories Link Row */}
        <div className="flex items-center font-sans whitespace-nowrap text-xs font-black tracking-wider uppercase">
          {inlineCategories.map((category, index) => {
            
            // 🔥 BACKEND COMPATIBILITY CHECK: 
            // Agar click karne par abhi bhi data na dikhe, toh tumhare backend route ko lower-case pasand ho sakta hai.
            // Us case mein tum niche `category` ki jagah `category.toLowerCase()` kar sakte ho.
            const currentPath = `/category/${category}`;
            const isActive = location.pathname === currentPath;

            return (
              <Link
                key={index}
                to={currentPath}
                className={`h-11 flex items-center px-5 border-r border-red-800 transition-colors hover:bg-red-800 ${isActive ? 'bg-red-900 font-black' : ''}`}
              >
                {category}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SubNavbar;