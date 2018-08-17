import { CHANGE_STEP } from '../actions/types';

const stepReducer = (state = 10, action) => {
  switch (action.type) {
    case CHANGE_STEP:
      return action.payload;
    default:
      return state;
  }
};

export default stepReducer;
