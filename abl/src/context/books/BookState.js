import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import AlertContext from '../alert/alertContext';
import xml2js from 'xml2js';
import { SEARCH_BOOKS, SET_LOADING, CLEAR_SEARCH } from '../types';

const BookState = props => {
  const alertState = useContext(AlertContext);

  const initialState = {
    books: [],
    book: {},
    loading: false,
  };

  const key = 'e3tRV8bBX3V9UzUCLr0A';

  const [state, dispatch] = useReducer(BookReducer, initialState);

  // Search Books
  const searchBooks = async text => {
    setLoading();
    const xml = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${key}&q=${text}`);
    xml2js.parseString(
      xml.data,
      {
        explicitArray: false,
      },
      (err, res) => {
        if (err) {
          alertState.setAlert(err, 'red');
        } else {
          const bookData = res.GoodreadsResponse.search.results.work;
          console.log(bookData);
          const searchedBooks = bookData.map(book => ({
            id: book.id._,
            title: book.best_book.title,
            author: book.best_book.author.name,
            img: book.best_book.image_url,
            year: book.original_publication_year._,
            rating: book.average_rating,
          }));
          dispatch({ type: SEARCH_BOOKS, payload: searchedBooks });
        }
      }
    );
  };

  // Clear search
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

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
        clearSearch,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
