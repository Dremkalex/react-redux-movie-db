import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// hoc
import withRenderLog from '../../hoc/withRenderLog';
// components
import Movie from '../movie';
// actions
import { addToWatchlist } from '../../redux/actions/watchlist';
// servises
import {
  getShortOverview,
  getReleaseDate,
  imageUrl,
} from '../../servises/movie-list';
// styles
import styles from './styles.css';

const MovieList = ({ movies, onClickInfo, addToWatchlist: addToWatch }) => (
  <ul className={styles.ul}>
    {movies.map(movie => (
      <li key={movie.id} className={styles.li}>
        <Movie
          id={movie.id}
          url={imageUrl(movie.poster_path)}
          releaseDate={getReleaseDate(movie.release_date)}
          overview={getShortOverview(movie.overview)}
          average={movie.vote_average}
          onClickAdd={() => addToWatch(movie)}
          onClickInfo={() => onClickInfo(movie.id)}
        />
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onClickInfo: PropTypes.func.isRequired,
  addToWatchlist: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addToWatchlist };

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withRenderLog,
)(MovieList);
