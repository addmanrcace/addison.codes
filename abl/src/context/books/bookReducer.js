import { SEARCH_BOOKS, ADD_BOOK, UPDATE_BOOK, SET_LOADING, CLEAR_SEARCH, GET_BOOKS, DELETE_BOOK } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        collection: action.payload,
        loading: false,
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case ADD_BOOK:
      return {
        ...state,
        collection: [...state.collection, action.payload],
        loading: false,
      };
    case UPDATE_BOOK:
      return {
        ...state,
        collection: state.collection.map(book => (book._id === action.payload.id ? action.payload : book)),
        loading: false,
      };
    case DELETE_BOOK:
      return {
        ...state,
        collection: state.collection.filter(book => book._id !== action.payload),
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        books: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
