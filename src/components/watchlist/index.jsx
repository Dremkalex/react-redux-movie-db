import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Panel from '../shared-ui/panel';
import WatchMovie from '../watch-movie';
// actions
import { removeFromWatchlist } from '../../redux/actions/watchlist';
// styles
import styles from './styles.css';

const Watchlist = ({
  watchlist,
  removeFromWatchlist: removeFromWatch,
  onClickInfo,
}) => (
  <Panel watchListPanel>
    <h2 className={styles.title}>Watchlist</h2>
    {watchlist.length > 0 && (
      <ul className={styles.ul}>
        {watchlist.map(movie => (
          <li key={movie.id} className={styles.li}>
            <WatchMovie
              movie={movie}
              onClickRemove={() => removeFromWatch(movie.id)}
              onClickInfo={() => onClickInfo(movie.id)}
            />
          </li>
        ))}
      </ul>
    )}
  </Panel>
);

Watchlist.propTypes = {
  watchlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClickInfo: PropTypes.func.isRequired,
  removeFromWatchlist: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  watchlist: state.watchlist,
});

const mapDispatchToProps = { removeFromWatchlist };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Watchlist);
