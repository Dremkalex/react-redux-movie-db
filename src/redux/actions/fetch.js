import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCES,
  FETCH_MOVIE_ERROR,
} from './types';

import { fetchMoviesByCategory } from '../../servises/api';

const fetchMoviesStart = () => ({
  type: FETCH_MOVIE_START,
});

const fetchMoviesSucces = movies => ({
  type: FETCH_MOVIE_SUCCES,
  payload: movies,
});

const fetchMoviesError = error => ({
  type: FETCH_MOVIE_ERROR,
  payload: error,
});

const fetchMovies = category => dispatch => {
  dispatch(fetchMoviesStart());

  fetchMoviesByCategory(category)
    .then(movies => dispatch(fetchMoviesSucces(movies)))
    .catch(error => dispatch(fetchMoviesError(error)));
};

export default fetchMovies;
