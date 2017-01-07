import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';

const NODE_ENV = process.env.NODE_ENV;

class HelloMessage extends React.PureComponent {
  static defaultProps = {
    Application: <p>Missing Application :(</p>,
    payload: {},
  }
  static PropTypes = {
    Application: PropTypes.element.isRequired,
    payload: PropTypes.object.isRequired,
  }
  render() {
    const { payload, Application } = this.props;
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{payload.title}</title>
          <meta name="description" content={payload.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <link rel="stylesheet" href={`/static/css/${Application.name.toLowerCase()}.css`} />{/* Application StyleSheet */}
        </head>
        <body>
          <div
            id="app-body"
            dangerouslySetInnerHTML={{
              __html: NODE_ENV === 'production' ? renderToString(<Application routerProps={payload.props} />) : '' }}
          />{/* Server-Side-Rendering */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.PRELOADED_STATE=${JSON.stringify(payload.store.getState())};`,
            }}
          />{/* Preloaded State of the Application */}
          <script src="/static/commons.js" />{/* Just common JS */}
          <script src={`/static/${Application.name.toLowerCase()}.js`} />{/* The React Application */}
        </body>
      </html>
    );
  }
}

export default HelloMessage;
