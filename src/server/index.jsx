import bodyParser from 'body-parser';
import colors from 'colors';
import compression from 'compression';
import errorHandler from 'errorhandler';
import express from 'express';
import expressReactViews from 'express-react-views';
import expressValidator from 'express-validator';
import path from 'path';
import session from 'express-session';

import config from './server.config';
// import html from './home';
// import MyApplication from '../application/myApplication';

/**
 * Controllers (route handlers).
 */
const homeController = require('./controller/home');

const ONE_YEAR_MS = 31557600000;
const NODE_ENV = process.env.NODE_ENV === 'production' ?
  'production' :
  'development';

const { log } = console;
/* Express server */
const app = express();

/* connect to mongo */

/* express configuration */
app.set('views', path.resolve(__dirname, './view'));
app.set('view engine', 'jsx');
if (NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDev = require('../../webpack.client');
  const compilerDev = webpack(webpackDev);
  app.use(require('webpack-dev-middleware')(compilerDev, { noInfo: true, publicPath: config.publicPath }));
  app.use(require('webpack-hot-middleware')(compilerDev));
}
app.engine('jsx', expressReactViews.createEngine({
  babel: {
    presets: ['es2015', 'stage-3', 'react'],
    plugins: [
      ['transform-runtime'],
      ['transform-class-properties', { spec: true }],
      ['transform-es2015-classes']
    ],
  },
}));
app.use(compression({ level: 9 }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(expressValidator());
// app.use(session({
//   something: 123,
// }));
app.use(config.publicPath, express.static(config.staticDir, {
  maxAge: NODE_ENV === 'development' ? 1 : ONE_YEAR_MS,
}));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);

// app.get('*', (req, res) => {
//   res.set('Content-Type', 'text/html').status(200);
//   if (NODE_ENV === 'production') {
//     res.setHeader('Cache-Control', 'public, max-age=31536000');
//   }
//   res.send(html(
//     'myApplication',
//     MyApplication,
//     { counter: 300 },
//   ));
// });

/**
 * Error Handler.
 */
app.use(errorHandler());

app.listen(config.port, config.host, (err) => {
  if (err) {
    log(colors.red(err));
    process.exit(1);
  }
  log(colors.underline.blue(`NODE_ENV = "${NODE_ENV}"`));
  log(colors.blue(`Listening at http://${config.host}:${config.port}`));
});
