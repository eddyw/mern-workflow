import webpackConfig from '../../../webpack.client';

const config = {
  port: process.env.PORT || 8080,
  host: process.env.IP || 'localhost',
  distDir: './build/dist/',
  publicPath: webpackConfig.output.publicPath,
  webpackConfig,
};
export default config;
