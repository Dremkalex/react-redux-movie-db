import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// hoc
import Select from 'react-select';
import withRenderLog from '../../hoc/withRenderLog';
// actions
import fetchMovies from '../../redux/actions/fetch';
// servises
import { getCategoryUrl } from '../../servises/api';
// components
import Panel from '../shared-ui/panel';

import selectorOptions from '../../selector-options';

class CategorySelector extends Component {
  static propTypes = {
    fetchMovies: PropTypes.func.isRequired,
  };

  state = {
    category: null,
  };

  changeCategory = category => {
    const { category: prevCategory } = this.state;
    if (category === prevCategory) return;
    this.setState({ category }, () => {
      const { fetchMovies: fetchMoviesByCategory } = this.props;
      const url = getCategoryUrl(category.value);
      fetchMoviesByCategory(url);
    });
  };

  render() {
    const { category } = this.state;
    return (
      <Panel searchBlock>
        <p>Search by category</p>
        <Select
          options={selectorOptions}
          value={category}
          onChange={this.changeCategory}
          placeholder="Choose category..."
        />
      </Panel>
    );
  }
}
const mapDispatchToProps = { fetchMovies };

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withRenderLog,
)(CategorySelector);
