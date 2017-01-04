import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';

const NODE_ENV = process.env.NODE_ENV;

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
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{payload.title}</title>
          <meta name="description" content={payload.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <link rel="stylesheet" href={`/static/css/${applicationName.toLowerCase()}.css`} />{/* Application CSS */}
        </head>
        <body>
          {/* <h3>{applicationName}</h3> */}
          <div id="app-body" dangerouslySetInnerHTML={{ __html: NODE_ENV === 'production' ? renderToString(<Application />) : '' }} /> {/* Server-Side-Rendering of Application */}
          <script dangerouslySetInnerHTML={{ __html: `window.PRELOADED_STATE=${JSON.stringify(preloadedState)};` }} /> {/* Preloaded State of Application */}
          <script src="/static/commons.js" /> {/* Just common JS */}
          <script src={`/static/${applicationName.toLowerCase()}.js`} /> {/* React Application */}
        </body>
      </html>
    );
  }
}

export default HelloMessage;
