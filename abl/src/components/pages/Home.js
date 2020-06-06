import React, { useContext, useEffect } from 'react';
import SearchResults from '../books/SearchResults';
import BookSearch from '../books/BookSearch';
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
    </div>
  );
};

export default Home;
