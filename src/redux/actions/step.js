import { CHANGE_STEP } from './types';

const changeStep = step => ({
  type: CHANGE_STEP,
  payload: step,
});

export default changeStep;
