import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/image.png" alt="Age Generator App Logo" className="h-10 mr-3" />
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Age Generator
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              A volunteer-driven student community aiming to bridge the skill
              gap between an Undergraduate and an Industry Professional.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Useful Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Link to="/" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
                <Link to="/blog" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Blog
                </Link>
                <Link to="/code-of-conduct" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Code Of Conduct
                </Link>
              </div>
              <div className="space-y-4">
                <Link to="/contact" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </Link>
                <Link to="/events" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Events
                </Link>
                <Link to="/brand-assets" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Brand Assets
                </Link>
              </div>
            </div>
          </div>
          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Subscribe
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Get the latest updates and information regarding MS Club of SLIIT
              right to your inbox!
            </p>
            <form className="flex">
              <input type="email" placeholder="Email Address" className="flex-1 bg-gray-800 text-gray-200 px-4 py-3 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300" />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-r-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © 2023, All Rights Reserved{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                MS Club of SLIIT
              </a>
            </p>
            <a href="#top" className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group">
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;