import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import AlertContext from '../alert/alertContext';
import xml2js from 'xml2js';
import { SEARCH_BOOKS, GET_BOOKS, ADD_BOOK, SET_LOADING, CLEAR_SEARCH, DELETE_BOOK } from '../types';

const BookState = props => {
  const alertState = useContext(AlertContext);

  const initialState = {
    books: [],
    book: {},
    collection: [],
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

  // Get books for collection
  const getBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/books');
      dispatch({
        type: GET_BOOKS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Add book
  const addBook = async book => {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('http://localhost:5000/api/books', book, config);
      dispatch({ type: ADD_BOOK, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete book from collection
  const deleteBook = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      dispatch({
        type: DELETE_BOOK,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Clear search
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        loading: state.loading,
        collection: state.collection,
        searchBooks,
        getBooks,
        addBook,
        deleteBook,
        setLoading,
        clearSearch,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
