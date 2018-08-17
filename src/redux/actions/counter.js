import { INCREMENT, DECREMENT } from './types';

const increment = val => ({
  type: INCREMENT,
  payload: val,
});

const decrement = val => ({
  type: DECREMENT,
  payload: val,
});

export { increment, decrement };
