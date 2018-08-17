import { combineReducers } from 'redux';
import moviesReducer from './movies';
// import counterReducer from './counter';
// import stepReducer from './step';

const rootReducer = combineReducers({
  // countValue: counterReducer,
  // step: stepReducer,
  movies: moviesReducer,
});

export default rootReducer;
