import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import routes from './routes';

// Hot Reload!
if (module.hot) module.hot.accept();

// Always check if env.BROWSER
if (process.env.BROWSER) {
  require('../../../node_modules/sanitize.css/sanitize.css');
  require('./style/skeleton.scss');
}

class Application extends React.Component {
  static name = 'HelloWorld'; // The Application's name must coincide with the folder's name.
  static routerProps = {}; // It's defined by the server when matching the url with the routes.
  static store = store;
  static Routes = routes;
  componentDidMount() {
    // Let the reducer(s) decide if it should load the state from "PRELOAD_STATE"
    if (process.env.BROWSER) store.dispatch({ type: 'PRELOAD_STATE' });
  }
  render() {
    return (
      <Provider store={store}>
        {process.env.BROWSER ? // Client-Side / Server-Side rendering
          <Router
            history={syncHistoryWithStore(browserHistory, store)}
          >
            {Application.Routes}
          </Router> :
          <RouterContext {...this.props.routerProps} />
        }
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
