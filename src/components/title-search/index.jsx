import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// hoc
import withRenderLog from '../../hoc/withRenderLog';
// components
import Panel from '../shared-ui/panel';
import Button from '../shared-ui/button';
import ICONS from '../icon/icons';
import Icon from '../icon';

// actions
import fetchMovies from '../../redux/actions/fetch';

// servises
import { getTitleUrl } from '../../servises/api';

// styles
import styles from './styles.css';

class TitleSearch extends Component {
  static propTypes = {
    fetchMovies: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  changeTitle = ({ target }) => {
    this.setState({ title: target.value });
  };

  submitTitle = evt => {
    evt.preventDefault();

    const { title } = this.state;
    const { fetchMovies: fetchMoviesByTitle } = this.props;

    if (!title) return;

    const url = getTitleUrl(title);
    fetchMoviesByTitle(url);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <Panel searchBlock>
        <form onSubmit={this.submitTitle} className={styles.form}>
          <p className={styles.label}>Search by title</p>
          <input
            className={styles.input}
            value={title}
            onChange={this.changeTitle}
            type="text"
          />
          <Button>
            <Icon icon={ICONS.SEARCH} />
          </Button>
        </form>
      </Panel>
    );
  }
}

const mapDispatchtoProps = { fetchMovies };

export default compose(
  connect(
    null,
    mapDispatchtoProps,
  ),
  withRenderLog,
)(TitleSearch);
