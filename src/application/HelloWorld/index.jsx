import React from 'react';
import { render } from 'react-dom';
import {
  Button,
  Container,
  Divider,
  Icon,
  Menu,
} from 'semantic-ui-react';

// This file is required by the server for server-side-rendering,
// so require only when env var is set to "IN_BROWSER".
// IN_BROWSER is set by webpack to true when transpiling and other tasks.
if (process.env.IN_BROWSER) require('../../lib/semantic/dist/semantic.css');

// Hot Reload!
if (module.hot) module.hot.accept();

// The Application itself.
class Application extends React.Component {
  // Load the default state of the application.
  // PRELOADED_STATE is set by the server. (server-side-rendering)
  static preloadedState = Object.assign({
    other: 1,
  },
    process.env.IN_BROWSER ? window.PRELOADED_STATE : {},
  );
  render() {
    return (
      <div>{/* Provider */}
        <Menu attached stackable inverted>
          <Container>
            <Menu.Item active onClick={() => {}}>
              <Icon loading inverted color="teal" name="circle outline" size="large" />
              Home
            </Menu.Item>
          </Container>
        </Menu>
        <Divider clearing hidden />
        <Container>
          {JSON.stringify(Application.preloadedState)}
        </Container>
      </div>
    );
  }
}

// This file is required by the server for server-side-rendering,
// render only when running on the client-side.
if (process.env.IN_BROWSER) {
  render(
    <Application />,
    document.getElementById('app-body'),
  );
}
export default Application;
