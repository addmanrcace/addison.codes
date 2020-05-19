import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import BookContext from '../../context/books/bookContext';

const SearchResults = () => {
  const bookContext = useContext(BookContext);
  const { loading, books } = bookContext;
  books.map((book) => console.log(book));

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>This is a book</div>
      // console.log(books);
      //   {books.map((book) => (
      //   <BookCard key={book.id} book={book} />
      // ))}
    );
  }
};

export default SearchResults;
