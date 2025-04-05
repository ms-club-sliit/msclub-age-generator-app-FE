import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} ImageSynth. Developed by{" "}
          <span className="text-blue-400 font-medium">MS CLUB of SLIIT</span>.
        </p>
        <a
          href="#top"
          className="mt-4 md:mt-0 inline-flex items-center justify-center w-9 h-9 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
