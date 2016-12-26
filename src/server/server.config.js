import path from 'path';
import webpackConfig from '../../webpack.config.prod.server';

const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/test',
  port: process.env.PORT || 8080,
  host: process.env.IP || 'localhost',
  staticDir: path.resolve(__dirname, '../../build/dist/'),
  publicPath: webpackConfig.output.publicPath,
};

export default config;
