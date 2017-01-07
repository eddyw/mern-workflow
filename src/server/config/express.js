import bodyParser from 'body-parser';
import compression from 'compression';
import errorHandler from 'errorhandler';
import express from 'express';
import expressReactViews from 'express-react-views';
import expressValidator from 'express-validator';
import path from 'path';
import config from './server';

const ONE_YEAR = 31557600000;
const NODE_ENV = process.env.NODE_ENV;

const app = express();

if (NODE_ENV === 'development') {
  const compiler = require('webpack')(config.webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.publicPath }));
  app.use(require('webpack-hot-middleware')(compiler));
}
app.set('views', path.resolve(__dirname, '../view'));
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine({
  babel: {
    presets: ['es2015', 'stage-3', 'react'],
    plugins: [
      ['transform-runtime'],
      ['transform-class-properties', { spec: true }],
      ['transform-es2015-classes'],
    ],
  },
}));
app.use(compression({
  level: 9,
  threshold: 0,
  filter: () => true,
}));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(expressValidator());
app.use(config.publicPath, express.static(config.distDir, {
  maxAge: NODE_ENV === 'development' ? 0 : ONE_YEAR,
}));
app.use(errorHandler());

export default app;
