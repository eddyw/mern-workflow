import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import express from 'express';
import expressReactViews from 'express-react-views';
import expressValidator from 'express-validator';
// import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import webpackConfig from '../../webpack.client';

// Read environment-specific variables from .env file.
require('dotenv').config();

const ONE_YEAR = 31557600000;
const NODE_ENV = process.env.NODE_ENV;
const app = express();

// settings
app.set('port', process.env.PORT || 8080);
app.set('host', process.env.IP || '0.0.0.0');
app.set('env', NODE_ENV);
app.set('config_dist_folder', './build/dist/');
app.set('config_public_path', webpackConfig.output.publicPath);
app.set('config_webpack', webpackConfig);
app.set('config_static_maxage', NODE_ENV === 'development' ? 0 : ONE_YEAR);
app.set('config_mongodb_uri', process.env.MONGODB_URI || 'mongodb://127.0.0.1/mern-workflow');

// webpack | hot-reload
if (NODE_ENV === 'development') {
  const compiler = require('webpack')(app.get('config_webpack'));
  app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: app.get('config_public_path') }));
  app.use(require('webpack-hot-middleware')(compiler));
}

// view engine setup (use jsx)
app.set('views', path.resolve(__dirname, './view'));
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine({
  beautify: NODE_ENV === 'development',
  babel: {
    presets: ['es2015', 'stage-3', 'react'],
    plugins: [
      ['transform-runtime'],
      ['transform-class-properties', { spec: true }],
      ['transform-es2015-classes'],
    ],
  },
}));

// middleware
app.use(compression({ level: 9, threshold: 0, filter: () => true }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(cookieParser());
app.use(expressValidator());
app.use(app.get('config_public_path'), express.static(app.get('config_dist_folder'), { maxAge: app.get('config_static_maxage') }));
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.use(errorHandler());
}

// mongodb config
// mongoose.connect(app.get('config_mongodb_uri'));

export default app;
