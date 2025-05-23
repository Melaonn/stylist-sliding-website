import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const navItems = ['home', 'about', 'our work', 'services', 'blog', 'gallery', 'contact'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    let timeout;
    if (menuOpen) {
      timeout = setTimeout(() => setShowOverlay(true), 500);
    } else {
      setShowOverlay(false);
    }
    return () => clearTimeout(timeout);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 px-4 pt-4">
      {/* Desktop & Mobile Nav Container */}
      <div className="bg-white shadow-md rounded-lg px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">BizName</h1>

        {/* Desktop Nav */}
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.replace(/\s+/g, '')}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="capitalize cursor-pointer text-gray-700 hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8 relative z-60"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transition-transform duration-300 ease-in-out ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transition-opacity duration-300 ease-in-out ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 rounded transition-transform duration-300 ease-in-out ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Sliding in */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-full bg-white rounded-l-lg shadow-lg z-50
          transform transition-transform duration-500 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col items-center justify-center space-y-8 md:hidden
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.replace(/\s+/g, '')}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
            className="text-3xl font-semibold capitalize cursor-pointer text-gray-700 hover:text-blue-600 transition"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Background Overlay */}
      {showOverlay && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}
    </nav>
  );
}
