const path = require('path');
const webpack = require('webpack');
const ExternalsPlugin = require('webpack-externals-plugin');

// Webpack Config for {Production} (Server)
// · devTool: https://webpack.github.io/docs/build-performance.html#sourcemaps
// · Optimization: https://github.com/webpack/docs/wiki/optimization
// · DefinePlugin: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
// · ExternalsPlugin: https://github.com/Morhaus/webpack-externals-plugin

module.exports = {
  devtool: 'eval',
  entry: [
    './src/server/server.dev.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '/server.bundle.js',
    publicPath: '/static', /* Read by "server.config.js" */
  },
  target: 'async-node',
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'src/server',
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, '/node_modules/'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
