import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from './types';

const addToWatchlist = movie => ({
  type: ADD_TO_WATCHLIST,
  payload: movie,
});

const removeFromWatchlist = id => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: id,
});

export { addToWatchlist, removeFromWatchlist };
