// Webpack Config for {Development} (Client & Server)
// · devTool: https://webpack.github.io/docs/build-performance.html#sourcemaps
// · Optimization: https://github.com/webpack/docs/wiki/optimization
// · Hot Reload: https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
// · React Hot Reloader (Beta 3): https://github.com/gaearon/react-hot-boilerplate/pull/61
// · uglifyjsplugin: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
// · NoErrorsPlugin: https://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
// · ExtractTextPlugin: https://github.com/webpack/extract-text-webpack-plugin
// · DefinePlugin: https://webpack.github.io/docs/list-of-plugins.html#defineplugin

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const entries = require('./webpack.entry');

const NODE_ENV = process.env.NODE_ENV === 'production' ? 
  'production' : 
  'development';
const defineEnv = {
  NODE_ENV: JSON.stringify(NODE_ENV),
  IS_BROWSER: true,
};
const entry = {};
Object.getOwnPropertyNames(entries).forEach(
  Application => {
    entry[Application.toLocaleLowerCase()] = 
      NODE_ENV === 'production' ? 
        [ 'babel-polyfill', entries[Application] ] :
        [ 'babel-polyfill', 'webpack-hot-middleware/client', entries[Application ]
    ]
  }
);
const include = [
  /node_modules/,
  path.resolve(__dirname, 'src/application'),
  path.resolve(__dirname, 'src/client')
];
const plugins_dev = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.CommonsChunkPlugin('commons.js'),
  new ExtractTextPlugin('css/[name].css'),
  new webpack.DefinePlugin({ 'process.env': defineEnv })
];
const plugins_prod = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false,
    sourceMap: true
  }),
  new webpack.optimize.DedupePlugin(),
];

module.exports = {
  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map',
  entry,
  output: {
    path: path.join(__dirname, 'build/dist'),
    filename: '[name].js',
    publicPath: '/static/' /* Hot-Reload does not work if this is not set */
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    modules: [ 'src', 'node_modules' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loaders: NODE_ENV === 'production' ?
          [ 'babel-loader' ] :
          [ 'react-hot-loader/webpack', 'babel-loader' ]
      }, {
        test: /\.scss$/,
        include,
        loader: NODE_ENV === 'production' ?
          ExtractTextPlugin.extract('raw-loader', 'css-loader?minimize!sass-loader') :
          ExtractTextPlugin.extract('raw-loader', 'css-loader!sass-loader')
      }, {
        test: /\.css$/,
        include,
        loader: NODE_ENV === 'production' ?
          ExtractTextPlugin.extract('raw-loader', 'css-loader?minimize') :
          ExtractTextPlugin.extract('raw-loader', 'css-loader')
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: NODE_ENV === 'production' ?
    plugins_prod.concat(plugins_dev) :
    plugins_dev
};
