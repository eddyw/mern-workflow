import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
// import { Router, Route, browserHistory } from 'react-router';
import { /* syncHistoryWithStore,*/ routerReducer } from 'react-router-redux';
import { fromJS } from 'immutable';


require('./styles/style.dev.scss');

// Enable Hot Reload
if (module.hot) {
  module.hot.accept();
}

// Import initial state
const initialState = fromJS({
  counter: 0,
});

console.log(initialState);

// Import reducers here
const someReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state.get('counter') + 1);
      return state.set('counter', state.get('counter') + action.payload);
    case 'DECREMENT':
      return state.set('counter', state.get('counter') - action.payload);
    default:
      return state;
  }
};

console.log(process.env.NODE_ENV);

// Add the reducer to the store on the 'routing' key
const store = createStore(
  combineReducers({
    someReducer,
    routing: routerReducer,
  }),
  {/* default state */},
  compose(
    window.devToolsExtension && process.env.NODE_ENV === 'development' ?
      window.devToolsExtension() : undefined, // Enable ReduxDevTools only in dev.
  ),
);

store.subscribe(() => {
  console.log(store.getState());
});

// const history = syncHistoryWithStore(browserHistory, store);

// Allows hot reload in redux changes
/* if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
} */

store.dispatch({ type: 'INCREMENT', payload: 1 });

// const css = require('!css-loader!sass-loader!./vendor.scss');
// const css = require('./vendor.scss');

render(
  <Provider store={store}>
    <p>{JSON.stringify(store.getState().someReducer)}</p>
  </Provider>,
  document.getElementById('root'),
);
