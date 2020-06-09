import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6 z-40 relative">
      <div className="w-10/12 inline-flex mx-auto">
        <div className="flex items-center w-full text-white mr-6">
          <span className=" flex-1 font-semibold text-xl">ABL</span>
          <span className="text-white font-bold">
            &copy; 2020{' '}
            <Link className="flex-1 text-gray-400 hover:text-gray-500" to="addison.codes">
              addison.codes
            </Link>
          </span>
          <span className="flex-1 text-white ml-3 text-right">
            Made with{' '}
            <span role="img" aria-label="heart">
              💖
            </span>{' '}
            for Alix
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
