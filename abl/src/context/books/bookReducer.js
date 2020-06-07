import { SEARCH_BOOKS, ADD_BOOK, SET_LOADING, CLEAR_SEARCH, GET_BOOKS } from '../types';

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
        collection: [action.payload, ...state.collection],
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
