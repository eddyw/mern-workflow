import webpackConfig from '../../../webpack.client';

const config = {
  port: process.env.PORT || 8080,
  host: process.env.IP || '0.0.0.0',
  distDir: './build/dist/',
  publicPath: webpackConfig.output.publicPath,
  webpackConfig,
};
export default config;
