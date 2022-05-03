import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';
import greetingsReducer from './redux/greetings';

const reducer = combineReducers({
  greetingsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;