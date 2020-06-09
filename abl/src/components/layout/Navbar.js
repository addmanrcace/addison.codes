import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const { isAuthenticated, logout, user } = useContext(authContext);

  const onLogout = () => logout();

  const authLinks = (
    <Fragment>
      <div className="text-sm lg:flex-grow">
        <Link
          to="/"
          href="#!"
          className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          Home
        </Link>
        <Link
          to="/about"
          href="#!"
          className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          About
        </Link>
      </div>
      <div>
        <span className="inline-flex mr-4 text-white font-bold">Hello {user && user.name}</span>
        <a
          href="#!"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0"
          onClick={onLogout}
        >
          Logout
        </a>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <div className="text-sm lg:flex-grow">
        <Link
          to="/"
          href="#!"
          className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          Home
        </Link>
        <Link
          to="/about"
          href="#!"
          className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          About
        </Link>
      </div>
      <div>
        <Link
          to="/login"
          href="#!"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          Login
        </Link>
      </div>
    </Fragment>
  );

  return (
    <nav className="bg-red-500 p-6 z-40 relative">
      <div className="flex items-center justify-between flex-wrap w-10/12 mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ">
          <span className="font-semibold text-xl tracking-tight">ABL</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-red-200 border-red-400" onClick={() => toggleExpansion(!isExpanded)}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isExpanded ? 'block' : 'hidden'}`}>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
