import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import logger from './middlewares/logger';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
