import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, RouterContext, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import Main from './view/Main';
import Home from './view/Home';
import About from './view/About';

// Hot Reload!
if (module.hot) module.hot.accept();

// When including CSS Stylesheets always check if env.BROWSER
if (process.env.BROWSER) require('../../lib/semantic/dist/semantic.css');

class Application extends React.Component {
  static name = 'HelloWorld'; // The Application's name must coincide with the folder's name.
  static routerProps = {}; // It's defined by the server when matching the url with the routes.
  static store = store;
  static Routes = (
    <Router>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
  render() {
    if (process.env.BROWSER) store.dispatch({ type: 'PRELOAD_STATE' });
    return (
      <Provider store={store}>
        {process.env.BROWSER ? // Client-Side / Server-Side rendering
          <Router history={syncHistoryWithStore(browserHistory, store)}>
            {Application.Routes}
          </Router> :
          <Provider store={store}>
            <RouterContext {...this.props.routerProps} />
          </Provider>}
      </Provider>
    );
  }
}

// Render only in client-side.
if (process.env.BROWSER) {
  render(
    <Application />,
    document.getElementById('app-body'),
  );
}
export default Application;
