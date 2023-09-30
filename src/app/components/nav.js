import React from 'react';
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="text-black p-4 mt-6">
      <div className="flex items-center justify-between">
        {/* This div becomes a flex container on large screens (lg) */}
        <div className="lg:flex lg:space-x-16 text-base">
          <a href="#" className="hover:text-green-700">Home</a>
          <div className="relative group">
            <a href="#" className="hover:text-green-700">Menu <span className="ml-1">&#9660;</span></a>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-green-700">Services <span className="ml-1">&#9660;</span></a>
          </div>
          <a href="#" className="hover:text-green-700">Offers</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
