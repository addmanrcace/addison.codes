import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import BookContext from '../../context/books/bookContext';
import BookCard from './BookCard';

const SearchResults = () => {
  const bookContext = useContext(BookContext);
  const { loading, books } = bookContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {books.map((book) => (
          <BookCard key={book.id} title={book.title} author={book.author} img={book.img} year={book.year} rating={book.rating} />
        ))}
      </div>
    );
  }
};

export default SearchResults;
