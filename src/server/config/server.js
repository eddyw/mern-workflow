import path from 'path';
import webpackConfig from '../../../webpack.client';

const config = {
  port: process.env.PORT || 8080,
  host: process.env.IP || 'localhost',
  distDir: path.resolve(__dirname, '../../build/dist/'),
  publicPath: webpackConfig.output.publicPath,
  webpackConfig,
};
export default config;
