import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';

class HelloMessage extends React.PureComponent {
  static defaultProps = {
    Application: <p>Missing Application :(</p>,
    applicationName: '',
    preloadedState: JSON.stringify({}),
    payload: {},
  }
  static PropTypes = {
    Application: PropTypes.element.isRequired,
    applicationName: PropTypes.string.isRequired,
    preloadedState: PropTypes.string.isRequired,
    payload: PropTypes.object.isRequired,
  }
  render() {
    const { payload, Application, applicationName, preloadedState } = this.props;
    Application.preloadedState = preloadedState;
    return (
      <html lang="en">
        <head>
          <title>{payload.title}</title>
        </head>
        <body>
          <h3>{applicationName}</h3>
          <div id="app-body" dangerouslySetInnerHTML={{ __html: renderToString(<Application />) }} />
          <script dangerouslySetInnerHTML={{ __html: `window.PRELOADED_STATE=${JSON.stringify(preloadedState)};` }} />
          <script src="/static/commons.js" />
          <script src={`/static/${applicationName.toLowerCase()}.js`} />
        </body>
      </html>
    );
  }
}

export default HelloMessage;
