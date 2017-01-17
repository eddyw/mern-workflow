// Webpack Config for {Production} (Server)
// · devTool: https://webpack.github.io/docs/build-performance.html#sourcemaps
// · Optimization: https://github.com/webpack/docs/wiki/optimization
// · DefinePlugin: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
// · ExternalsPlugin: https://github.com/Morhaus/webpack-externals-plugin

const path = require('path');
const webpack = require('webpack');
const ExternalsPlugin = require('webpack-externals-plugin');
const colors = require('colors');

if (process.env.NODE_ENV !== 'production') {
  console.log(colors.bold.red('You can run "webpack --config webpack.server.js" only in NODE_ENV="production"'))
  process.exit(1);
}

const plugins = [
  new webpack.IgnorePlugin(/\.(css|sass|scss|less)$/),
  new ExternalsPlugin({
    type: 'commonjs',
    include: path.join(__dirname, '/node_modules/'),
  }),
  // Avoid using the console in production mode.
  new webpack.DefinePlugin({ 'console': {
    log: () => void 0
  }})
];

module.exports = {
  devtool: 'source-map',
  entry: [ './src/server/index.jsx' ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.bundle.js',
    publicPath: '/static/'
  },
  target: 'async-node',
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    modules: [ 'src/server', 'node_modules' ]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loaders: [ 'babel-loader' ]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins
};
