import { combineReducers } from 'redux';
import moviesReducer from './movies';
import watchlistReducer from './watchlist';

const rootReducer = combineReducers({
  movies: moviesReducer,
  watchlist: watchlistReducer,
});

export default rootReducer;
