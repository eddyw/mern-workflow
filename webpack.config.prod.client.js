const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const BabiliPlugin = require('babili-webpack-plugin');

// Webpack Config for {Production} (Client)
// · devTool: https://webpack.github.io/docs/build-performance.html#sourcemaps
// · Optimization: https://github.com/webpack/docs/wiki/optimization
// · Hot Reload: https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
// · React Hot Reloader (Beta 3): https://github.com/gaearon/react-hot-boilerplate/pull/61
// · uglifyjsplugin: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
// · NoErrorsPlugin: https://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
// · ExtractTextPlugin: https://github.com/webpack/extract-text-webpack-plugin
// · DefinePlugin: https://webpack.github.io/docs/list-of-plugins.html#defineplugin

module.exports = {
  devtool: 'source-map',
  entry: {
    index: ['babel-polyfill', './src/client/client.dev.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build/dist/'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [path.join(__dirname, 'src')],
        exclude: [/node_modules/],
        loaders: ['babel-loader'],
      }, {
        test: /\.scss$/,
        include: [/node_modules/, path.join(__dirname, 'src/client')],
        loader: ExtractTextPlugin.extract('raw-loader', 'css-loader?minimize!sass-loader'),
      }, {
        test: /\.css$/,
        include: [/node_modules/, path.join(__dirname, 'src/client')],
        loader: ExtractTextPlugin.extract('raw-loader', 'css-loader?minimize'),
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    // new BabiliPlugin(), /* Not quite ready for production */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      sourceMap: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('commons.js'),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
