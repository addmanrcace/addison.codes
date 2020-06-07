import React, { useContext, useEffect } from 'react';
import SearchResults from '../books/SearchResults';
import BookSearch from '../books/BookSearch';
import Collection from '../books/Collection';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mx-auto">
      <BookSearch />
      <SearchResults />
      <Collection />
    </div>
  );
};

export default Home;
