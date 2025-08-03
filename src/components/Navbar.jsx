import React from "react";
import img from "../assets/photo_2025-08-01_16-34-36 (2).jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="relative bg-gradient-to-r from-blue-250 to-blue-400 shadow-2xl rounded-b-[36px] max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

      {/* Left: Logo */}
      <img src={img} alt="MyBrand Logo" className="ml-4 h-10 w-14 object-cover" />

      {/* Center nav links */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <ul className="flex space-x-6 text-black-600 font-medium text-center">
          <li><Link to="/" className="hover:text-black transition">Home</Link></li>
          <li><Link to="/case-studies" className="hover:text-black transition">Case Studies</Link></li>
          <li><Link to="/Testimonials" className="hover:text-black transition">Testimonials</Link></li>
          <li><Link to="/ReacentWork" className="hover:text-black transition">Recent Works</Link></li>
          <li><Link to="/GetStarted" className="hover:text-black transition">Lets Get Started</Link></li>
        </ul>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center space-x-4 text-gray-700 text-xl mr-4">
        <a href="https://github.com/SharowarCodes" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black cursor-pointer" />
        </a>
        <a href="https://www.fiverr.com/sharowarcodes" target="_blank" rel="noopener noreferrer">
          <SiFiverr className="hover:text-green-600 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
        </a>
      </div>
    </nav>
  );
}
