import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

import foos from './foos';
// ...

const reducer = combineReducers({
    foos
    // ...
});

var store;

if (process.env.NODE_ENV === 'development') {
    store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
} else {
    store = createStore(reducer, applyMiddleware(thunk));
}

export default store;
