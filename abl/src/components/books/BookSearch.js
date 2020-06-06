import React, { useState, useContext } from 'react';
import BookContext from '../../context/books/bookContext';
import AlertContext from '../../context/alert/alertContext';

const BookSearch = () => {
  const bookContext = useContext(BookContext);
  const alertContext = useContext(AlertContext);
  const { searchBooks, books, clearSearch } = bookContext;
  const { setAlert } = alertContext;
  const [text, setText] = useState('');

  const onSubmit = e => {
    if (text !== '') {
      e.preventDefault();
      searchBooks(text);
      setText('');
    } else {
      e.preventDefault();
      setAlert('Please enter something');
    }
  };

  const onChange = e => setText(e.target.value);

  const onClick = e => clearSearch();

  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
      <input
        className="flex shadow appearance-none border-4 border-gray-600 bg-gray-200 rounded w-9/12 mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={text}
        type="text"
        placeholder="Search for books to add..."
        onChange={onChange}
      />
      {books.length > 0 ? (
        <button
          className="flex appearance-none border-2 border-gray-600 bg-red-100 rounded mx-auto m-5 py-2 px-2 font-bold text-gray-700"
          onClick={onClick}
        >
          Clear Search
        </button>
      ) : null}
    </form>
  );
};

export default BookSearch;
