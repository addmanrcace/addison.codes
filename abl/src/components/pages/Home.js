import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchResults from '../books/SearchResults';
import BookSearch from '../books/BookSearch';
import Collection from '../books/Collection';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  if (isAuthenticated) {
    return (
      <div className="mx-auto">
        <BookSearch />
        <SearchResults />
        <Collection />
      </div>
    );
  } else {
    return (
      <div className="mx-auto">
        <BookSearch />
        <SearchResults />

        <h1 className="text-xl text-center">
          Please{' '}
          <Link to="/login" className="text-teal-400 font-bold hover:text-teal-500">
            log in
          </Link>{' '}
          to add books to your collection.
        </h1>
      </div>
    );
  }
};

export default Home;
