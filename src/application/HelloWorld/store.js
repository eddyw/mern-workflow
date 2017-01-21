import { browserHistory } from 'react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
// Reducers
import location from './reducer/location';

// Enable ReduxDevTools (if installed) only in development and only in client.
const ReduxDevTools = (
  process.env.BROWSER === true &&
  process.env.NODE_ENV === 'development' ? window.devToolsExtension : false
);

// Return all reducers
const getReducers = () => combineReducers({
  location,
  routing: routerReducer,
});

// Store
const store = createStore(
  getReducers(),
  compose( // Middleware
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(browserHistory)), // Manage navigation events via Redux actions
    ReduxDevTools ? ReduxDevTools() : f => f,
  ),
);

// Hot reload! Redux
if (module.hot) {
  module.hot.accept('./store', () => {
    store.replaceReducer(getReducers());
  });
}
export default store;
