import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import config from './server.config';
import indexView from './views/index';

const ONE_YEAR_MS = 31557600000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const app = express();

if (NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDev = require('../../webpack.config.dev');
  const compilerDev = webpack(webpackDev);
  app.use(require('webpack-dev-middleware')(compilerDev, { noInfo: true, publicPath: config.publicPath }));
  app.use(require('webpack-hot-middleware')(compilerDev));
}

app.use(compression({ level: 9 }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: false }));
app.use(config.publicPath, express.static(config.staticDir, {
  maxAge: NODE_ENV === 'development' ? 1 : ONE_YEAR_MS,
}));

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html').status(200);
  if (NODE_ENV === 'production') {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  res.send(indexView());
});

app.listen(config.port, config.host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Listening at http://${config.host}:${config.port}`);
});
