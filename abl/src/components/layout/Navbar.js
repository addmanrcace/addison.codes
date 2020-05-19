import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 z-40 relative">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">ABL</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400" onClick={() => toggleExpansion(!isExpanded)}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isExpanded ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <Link to="/" href="#!" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </Link>
            <Link to="/about" href="#!" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </Link>
          </div>
          <div>
            <a
              href="#!"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              My Account
            </a>
          </div>
        </div>
      </nav>
      {/* <div className="w-full h-20 bg-teal-500 transform skew-y-3 -mt-10 z-0 relative mb-20"></div> */}
    </div>
  );
};

export default Navbar;
