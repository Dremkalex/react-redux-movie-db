import axios from 'axios';

const API_KEY = '624f7df45767c9a0ff7b6bf3107182d5';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getCategoryUrl = category =>
  `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;

export const getTitleUrl = title =>
  `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${title}`;

export const getMovies = url =>
  axios.get(url).then(response => response.data.results);

export const fetchMovieInfo = ({ id, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

  return axios
    .get(url)
    .then(response => response.data)
    .then(onSuccess)
    .catch(onError);
};
