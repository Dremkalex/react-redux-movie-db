import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import localstorage from './middlewares/localstorage';

const enhancer = composeWithDevTools(applyMiddleware(thunk, localstorage));

const store = createStore(rootReducer, enhancer);

export default store;
