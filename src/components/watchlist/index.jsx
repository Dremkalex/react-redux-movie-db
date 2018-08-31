import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// hoc
import withRenderLog from '../../hoc/withRenderLog';
// components
import Panel from '../shared-ui/panel';
import WatchMovie from '../watch-movie';
// actions
import { removeFromWatchlist } from '../../redux/actions/watchlist';
// selectors
import getWatchist from '../../redux/selectors/watchlist';
// styles
import styles from './styles.css';

const Watchlist = ({
  watchlist,
  onClickInfo,
  removeFromWatchlist: removeFromWatch,
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
  watchlist: PropTypes.arrayOf(Object).isRequired,
  onClickInfo: PropTypes.func.isRequired,
  removeFromWatchlist: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  watchlist: getWatchist(state),
});

const mapDispatchToProps = { removeFromWatchlist };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRenderLog,
)(Watchlist);
