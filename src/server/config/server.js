import path from 'path';
import webpackConfig from '../../../webpack.client';

const NODE_ENV = process.env.NODE_ENV === 'production' ?
  'production' :
  'development';

const config = {
  port: process.env.PORT || 8080,
  host: process.env.IP || 'localhost',
  distDir: NODE_ENV === 'production' ?
    './build/dist/' : // server is in build/server.bundle.js
    path.resolve(__dirname, '../../build/dist/'), // server is in src/server/index.jsx
  publicPath: webpackConfig.output.publicPath,
  webpackConfig,
};
export default config;
