import { browserHistory } from 'react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

// Enable ReduxDevTools (if installed) only in development and only in client.
const ReduxDevTools = (
  process.env.BROWSER === true &&
  process.env.NODE_ENV === 'development' ? window.devToolsExtension : false
);

// Store
export const store = createStore(
  combineReducers({
    // Reducers
    routing: routerReducer,
  }),
  process.env.BROWSER ? window.PRELOADED_STATE : {}, // Default state
  compose( // Middleware
    applyMiddleware(routerMiddleware(browserHistory)), // Issue navigation events via Redux actions
    ReduxDevTools ? ReduxDevTools() : undefined, // Call ReduxDevTools if installed
  ),
);

export const history = syncHistoryWithStore(browserHistory, store);
