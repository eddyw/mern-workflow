import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import config from '../server.config';

export default () => (
  `<!doctype html>${renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Loading...</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href={`${config.publicPath}/css/index.css`} />
      </head>
      <body>
        <div id="root" />
        <script src={`${config.publicPath}/commons.js`} />
        <script src={`${config.publicPath}/index.js`} />
      </body>
    </html>)}`
);
