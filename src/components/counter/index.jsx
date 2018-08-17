import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions/counter';

const Counter = ({ step, value, onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={() => onIncrement(step)}>
      &#43;
    </button>
    <span>{value}</span>
    <button type="button" onClick={() => onDecrement(step)}>
      &#8722;
    </button>
  </div>
);

const mapStateToProps = state => ({
  value: state.countValue,
  step: state.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(increment(step)),
  onDecrement: step => dispatch(decrement(step)),
});

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
