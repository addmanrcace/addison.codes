import { SEARCH_BOOKS, SET_LOADING, CLEAR_SEARCH } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
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
