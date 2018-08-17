import { combineReducers } from 'redux';

import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCES,
  FETCH_MOVIE_ERROR,
} from '../actions/types';

// const initialState = {
//   movies: {
//     items: [],
//     loading: false,
//     error: null,
//   },
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_SUCCES:
      return payload;
    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case FETCH_MOVIE_START:
      return true;
    case FETCH_MOVIE_SUCCES:
    case FETCH_MOVIE_ERROR:
      return false;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_START:
      return null;
    case FETCH_MOVIE_ERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  loading,
  error,
});
