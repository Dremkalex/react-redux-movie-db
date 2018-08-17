import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeStep from '../../redux/actions/step';

const StepSelector = ({ step, onChangeStep }) => (
  <select
    value={step}
    onChange={({ target }) => onChangeStep(Number(target.value))}
  >
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
);

StepSelector.propTypes = {
  step: PropTypes.number.isRequired,
  onChangeStep: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  step: state.step,
});

const mapDispatchToProps = dispatch => ({
  onChangeStep: step => dispatch(changeStep(step)),
});

// const mapDispatchToProps = { changeStep };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSelector);
