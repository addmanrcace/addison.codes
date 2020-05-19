import React from 'react';
import SearchResults from '../books/SearchResults';
import BookSearch from '../books/BookSearch';

const Home = () => {
  return (
    <div className="mx-auto">
      <BookSearch />
      <SearchResults />
    </div>
  );
};

export default Home;
