import { ADD_TO_STORAGE } from './types';

const addToStorage = watchlist => ({
  type: ADD_TO_STORAGE,
  payload: watchlist,
});

export default addToStorage;
