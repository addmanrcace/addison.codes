import React, { useState, useContext } from 'react';
import BookContext from '../../context/books/bookContext';
import AlertContext from '../../context/alert/alertContext';

const BookSearch = () => {
  const bookContext = useContext(BookContext);
  const alertContext = useContext(AlertContext);
  const { searchBooks } = bookContext;
  const { setAlert } = alertContext;
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    if (text !== '') {
      e.preventDefault();
      searchBooks(text);
      setText('');
    } else {
      setAlert('Please enter something', 'red');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
      <input
        className="flex shadow appearance-none border-4 border-gray-600 bg-gray-200 rounded w-6/12 mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={text}
        type="text"
        placeholder="Search for books..."
        onChange={onChange}
      />
    </form>
  );
};

export default BookSearch;
