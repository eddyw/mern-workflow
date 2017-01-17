import { browserHistory } from 'react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
// Reducers
import location from './reducer/location';

// Enable ReduxDevTools (if installed) only in development and only in client.
const ReduxDevTools = (
  process.env.BROWSER === true &&
  process.env.NODE_ENV === 'development' ? window.devToolsExtension : false
);

// Store
const store = createStore(
  combineReducers({ // Reducers
    location,
    routing: routerReducer,
  }),
  process.env.BROWSER ? window.PRELOADED_STATE : {}, // Default state
  compose( // Middleware
    // Manage navigation events via Redux actions
    applyMiddleware(routerMiddleware(browserHistory)),
    ReduxDevTools ? ReduxDevTools() : f => f,
  ),
);
export default store;
