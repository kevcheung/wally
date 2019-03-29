import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from  'redux-promise-middleware';

import wallReducer from  './ducks/wallReducer';

const combinedReducers = combineReducers({
    unsplash: wallReducer
});

const store = createStore(
    combinedReducers,
    applyMiddleware(promise)
);

export default store;