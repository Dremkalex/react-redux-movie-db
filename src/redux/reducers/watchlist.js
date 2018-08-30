import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/types';

const initState = JSON.parse(localStorage.getItem('watchlist')) || [];

const watchlistReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCHLIST:
      if (state.find(movie => movie.id === payload.id)) return state;
      return [payload, ...state];
    case REMOVE_FROM_WATCHLIST:
      return state.filter(movie => movie.id !== payload);
    default:
      return state;
  }
};

export default watchlistReducer;
