import React from 'react';
import { FaHeart, FaBell, FaCog } from 'react-icons/fa'; 
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      {/* Navbar Container */}
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center p-4">
        {/* Logo and Search Bar */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="w-[148px] h-[44px]">
            <img src="/morent.jpg" alt="Logo" className="w-full h-full object-contain" />
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 w-[492px] h-[44px] p-2 rounded-full shadow-sm">
            <AiOutlineSearch className="text-gray-600 w-[24px] h-[24px] mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-sm"
            />
            <img
              src="/filter.jpg" 
              alt="Filter"
              className="w-[24px] h-[24px] ml-2"
            />
          </div>
        </div>

        {/* Icons and Profile */}
        <div className="flex items-center gap-4">
          <FaHeart className="text-gray-800 w-[24px] h-[24px] cursor-pointer hover:text-gray-600" />
          <FaBell className="text-gray-800 w-[24px] h-[24px] cursor-pointer hover:text-gray-600" />
          <FaCog className="text-gray-800 w-[24px] h-[24px] cursor-pointer hover:text-gray-600" />
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden bg-gray-300 cursor-pointer">
            <img src="/Profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;