import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, RouterContext, IndexRoute } from 'react-router';
import { createStore, combineReducers, compose } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Main from './view/Main';
import Home from './view/Home';
import About from './view/About';

// Hot Reload!
if (module.hot) module.hot.accept();

// This file is required by the server for server-side-rendering,
// This line is ignored by the server (webpack.IgnorePlugin) but not by the client.
if (process.env.BROWSER === true) require('../../lib/semantic/dist/semantic.css');

// Enable ReduxDevTools (if installed) only in development and only in client.
const ReduxDevTools = (
  process.env.BROWSER === true &&
  process.env.NODE_ENV === 'development' ? window.devToolsExtension : false
);

// Store
export const store = createStore(
  combineReducers({
    routing: routerReducer,
  }),
  process.env.BROWSER ? window.PRELOADED_STATE : {},
  compose(ReduxDevTools ? ReduxDevTools() : undefined),
);

// Routes
export const Routes = (
  <Router>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

// The Application itself.
class Application extends React.Component {
  // The name of the application must coincide with the app's folder name,
  // For instance, if src/application/[AppName], then name='[AppName]'.
  // The structure of the generated app is the folloing (always lowercase):
  //    build/[appname].js
  //    build/css/[appname].css
  static name = 'HelloWorld';
  // This variable is set by the server when matching the url with the routes.
  static routerProps = {};
  render() {
    // Client-Side-Rendering
    if (process.env.BROWSER) {
      store.dispatch({ type: 'PRELOAD_STATE' });
      return (
        <Provider store={store}>
          <Router history={syncHistoryWithStore(browserHistory, store)}>
            {Routes}
          </Router>
        </Provider>
      );
    }
    // Server-Side-Rendering
    return (
      <Provider store={store}>
        <RouterContext {...this.props.routerProps} />
      </Provider>
    );
  }
}

// This file is required by the server for server-side-rendering,
// render only when running on the client-side.
if (process.env.BROWSER) {
  render(
    <Application />,
    document.getElementById('app-body'),
  );
}
export default Application;
