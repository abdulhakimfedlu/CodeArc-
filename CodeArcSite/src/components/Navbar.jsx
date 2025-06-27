import React from 'react';

const Navbar = ({ isDarkMode, setDarkMode, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-20">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 tracking-wide hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
          CodeArc
        </span>
        <div className="hidden md:flex space-x-10">
          <a
            href="#about"
            className="relative text-lg text-gray-300 hover:text-white font-medium transition duration-300 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></span>
          </a>
          <a
            href="#programmes"
            className="relative text-lg text-gray-300 hover:text-white font-medium transition duration-300 group"
          >
            Program
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></span>
          </a>
          <a
            href="#team"
            className="relative text-lg text-gray-300 hover:text-white font-medium transition duration-300 group"
          >
            Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="relative text-lg text-gray-300 hover:text-white font-medium transition duration-300 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></span>
          </a>
        </div>
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-gray-800 px-6 py-4">
          <a
            href="#about"
            className="block py-3 text-lg text-gray-300 hover:text-white font-medium transition duration-300 hover:translate-x-2"
          >
            About
          </a>
          <a
            href="#programmes"
            className="block py-3 text-lg text-gray-300 hover:text-white font-medium transition duration-300 hover:translate-x-2"
          >
            Program
          </a>
          <a
            href="#team"
            className="block py-3 text-lg text-gray-300 hover:text-white font-medium transition duration-300 hover:translate-x-2"
          >
            Team
          </a>
          <a
            href="#contact"
            className="block py-3 text-lg text-gray-300 hover:text-white font-medium transition duration-300 hover:translate-x-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
