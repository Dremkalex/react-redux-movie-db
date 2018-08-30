import { ADD_TO_STORAGE } from '../actions/types';

const localstorage = () => next => action => {
  if (action.type === ADD_TO_STORAGE) {
    localStorage.setItem('watchlist', JSON.stringify(action.payload));
  }
  next(action);
};

export default localstorage;
