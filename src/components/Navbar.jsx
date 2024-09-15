import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/efuye.png'; // Updated path to the logo image
import LanguageIcon from '@/assets/Language.png';
import SearchIcon from '@/assets/Search.png';
import HeartIcon from '@/assets/Heart.png';
import CartIcon from '@/assets/Cart.png';
import ProfileIcon from '@/assets/Profile.png';
import PlayIcon from '@/assets/Play.png'; 

const Navbar = () => {
  const handleIconClick = () => {
    alert('Icon clicked');
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-gray-800 text-white w-full py-4 fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Left side: Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <div className="transition duration-300 text-2xl font-bold">EGA</div>
            <div className="text-4xl text-gray-400">|</div>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-green-600  transition duration-300">
                  STORE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition duration-300">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Right side: Icons and Contact */}
          <div className="flex items-center space-x-6">
            <img
              src={LanguageIcon}
              alt="Language"
              className="w-6 h-6 cursor-pointer"
              onClick={handleIconClick}
            />
            <button className="bg-green-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300">
              Contact Us
            </button>
            <img
              src={ProfileIcon}
              alt="Profile"
              className="w-6 h-6 cursor-pointer"
              onClick={handleIconClick}
            />
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-gray-700 text-white rounded-full py-2 mt-16">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Left side: Search and Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-600 rounded-full px-3 py-1 h-8 w-40"> {/* Adjusted smaller width */}
              <img src={SearchIcon} alt="Search" className="w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Search Store"
                className="bg-transparent text-white outline-none text-sm w-full"
              />
            </div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Central
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Filter
                </a>
              </li>
            </ul>
          </div>

          {/* Right side: Wishlist, Cart, and Play */}
          <div className="flex items-center space-x-6">
            <img
              src={HeartIcon}
              alt="Wishlist"
              className="w-6 h-6 cursor-pointer"
              onClick={handleIconClick}
            />
            <img
              src={CartIcon}
              alt="Cart"
              className="w-6 h-6 cursor-pointer"
              onClick={handleIconClick}
            />
            <img
              src={PlayIcon}
              alt="Play"
              className="w-10 h-20 cursor-pointer"
              onClick={handleIconClick}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
