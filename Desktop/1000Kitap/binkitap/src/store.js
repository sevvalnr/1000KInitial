// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import yourReducer from './reducers';

const store = createStore(yourReducer, applyMiddleware(thunk));

export default store;
