import React, { useContext, Fragment } from 'react';
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
      <Fragment>
        <div className="flex flex-wrap w-full -mx-4">
          {books.map(book => (
            <BookCard key={book.id} title={book.title} author={book.author} img={book.img} year={book.year} rating={book.rating} />
          ))}
        </div>
      </Fragment>
    );
  }
};

export default SearchResults;
