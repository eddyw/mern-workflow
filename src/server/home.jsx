import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import config from './server.config';

export default (appEntry, Application, state) => {
  const entry = appEntry.toLowerCase();
  const preloadedState = (
    typeof state !== 'undefined' ? state : {}
  );
  const docType = '<!doctype html>';
  const applicationMarkup = renderToString(
    <Application
      state={Object.assign({},
        Application.defaultProps.state,
        state,
      )}
    />,
  );
  const staticMarkup = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Loading...</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </head>
      <body>
        <h1>Your react application is running below</h1>
        <div id="app-body" style={{ border: '1px red !important' }}>
          {'__APPLICATION__HTML__'}
        </div>
        <script>
          window.PRELOADED_STATE = {'__APPLICATION__PRELOADED__STATE'}
        </script>
        <script src={`${config.publicPath}/commons.js`} />
        <script src={`${config.publicPath}/${entry}.js`} />
      </body>
    </html>,
  );
  return (
    `${docType}${staticMarkup
      .replace('__APPLICATION__HTML__', applicationMarkup)
      .replace('__APPLICATION__PRELOADED__STATE', JSON.stringify(preloadedState))}`
  );
};

        // <link rel="stylesheet" href={`${config.publicPath}/css/${entry}.css`} />
