import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center group hover:opacity-90 transition-all duration-300 space-x-4"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={logo}
                alt="ImageSynth Logo"
                className="h-10 md:h-12 relative transform group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col space-y-0.5 ml-8">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                ImageSynth
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300 leading-tight">
                Synthesizing new visuals using real-time AI
              </span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
