import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const SubNavbar = () => {
  const location = useLocation();
  
  const inlineCategories = [
    'Politics', 'India', 'Environment', 'Business', 'Technology', 
    'Sports', 'Entertainment', 'Lifestyle', 'Crime', 'Education'
  ];

  return (
    <div className="w-full bg-red-700 text-white shadow-md border-t border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center overflow-x-auto no-scrollbar">
        
        {/* Home Minimal Icon Link */}
        <Link 
          to="/" 
          className={`flex items-center justify-center h-11 px-4 border-r border-red-800 transition-colors hover:bg-red-800 ${location.pathname === '/' ? 'bg-red-900' : ''}`}
        >
          <FiHome className="w-4 h-4 text-white" />
        </Link>

        {/* Inline Horizontal Dynamic Mapped Lists */}
        <div className="flex items-center font-sans whitespace-nowrap text-xs font-black tracking-wider uppercase">
          {inlineCategories.map((category, index) => {
            const currentPath = `/category/${category.toLowerCase()}`;
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