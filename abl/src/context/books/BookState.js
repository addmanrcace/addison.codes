import React, { useReducer } from 'react';
import axios from 'axios';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import xml2js from 'xml2js';
import { SEARCH_BOOKS, SET_LOADING } from '../types';

const BookState = (props) => {
  const initialState = {
    books: [],
    book: {},
    loading: false,
  };

  const key = 'e3tRV8bBX3V9UzUCLr0A';

  const [state, dispatch] = useReducer(BookReducer, initialState);

  // Search Books
  const searchBooks = async (text) => {
    setLoading();
    const xml = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${key}&q=${text}`);
    xml2js.parseString(
      xml.data,
      {
        explicitArray: false,
      },
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          const bookData = res.GoodreadsResponse.search.results.work;
          console.log(bookData);
          const searchedBooks = bookData.map((book) => ((book.id = res.GoodreadsResponse.search.results.work.id), console.log(book)));
          console.log(searchedBooks);
          dispatch({ type: SEARCH_BOOKS, payload: searchedBooks });
        }
      }
    );
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        // book: state.book,
        loading: state.loading,
        searchBooks,
        setLoading,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
