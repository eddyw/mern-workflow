/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _colors = __webpack_require__(2);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _config = __webpack_require__(3);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _routes = __webpack_require__(20);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(43);
	__webpack_require__(45);
	
	var _console = ({"log":() => void 0}),
	    log = _console.log;
	
	// Use routers
	
	_config2.default.use(_routes2.default);
	
	// Server Running...
	_config2.default.listen(_config2.default.get('port'), _config2.default.get('host'), function (err) {
	  if (err) {
	    log(_colors2.default.red(err));
	    process.exit(1);
	  }
	  log(_colors2.default.underline.blue('NODE_ENV = "' + _config2.default.get('env') + '"'));
	  log(_colors2.default.blue('Listening at http://' + _config2.default.get('host') + ':' + _config2.default.get('port')));
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("colors");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bodyParser = __webpack_require__(4);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _compression = __webpack_require__(5);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _cookieParser = __webpack_require__(6);
	
	var _cookieParser2 = _interopRequireDefault(_cookieParser);
	
	var _errorhandler = __webpack_require__(7);
	
	var _errorhandler2 = _interopRequireDefault(_errorhandler);
	
	var _express = __webpack_require__(8);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _expressReactViews = __webpack_require__(9);
	
	var _expressReactViews2 = _interopRequireDefault(_expressReactViews);
	
	var _expressValidator = __webpack_require__(10);
	
	var _expressValidator2 = _interopRequireDefault(_expressValidator);
	
	var _morgan = __webpack_require__(11);
	
	var _morgan2 = _interopRequireDefault(_morgan);
	
	var _path = __webpack_require__(12);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _webpack = __webpack_require__(13);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Read environment-specific variables from .env file.
	__webpack_require__(17).config();
	// import mongoose from 'mongoose';
	
	
	var ONE_YEAR = 31557600000;
	var NODE_ENV = process.env.NODE_ENV;
	var app = (0, _express2.default)();
	
	// settings
	app.set('port', process.env.PORT || 8080);
	app.set('host', process.env.IP || '0.0.0.0');
	app.set('env', NODE_ENV);
	app.set('config_dist_folder', './build/dist/');
	app.set('config_public_path', _webpack2.default.output.publicPath);
	app.set('config_webpack', _webpack2.default);
	app.set('config_static_maxage', NODE_ENV === 'development' ? 0 : ONE_YEAR);
	app.set('config_mongodb_uri', process.env.MONGODB_URI || 'mongodb://127.0.0.1/mern-workflow');
	
	// webpack | hot-reload
	if (NODE_ENV === 'development') {
	  var compiler = __webpack_require__(16)(app.get('config_webpack'));
	  app.use(__webpack_require__(18)(compiler, { noInfo: true, publicPath: app.get('config_public_path') }));
	  app.use(__webpack_require__(19)(compiler));
	}
	
	// view engine setup (use jsx)
	app.set('views', _path2.default.resolve(__dirname, './view'));
	app.set('view engine', 'jsx');
	app.engine('jsx', _expressReactViews2.default.createEngine({
	  beautify: NODE_ENV === 'development',
	  babel: {
	    presets: ['es2015', 'stage-3', 'react'],
	    plugins: [['transform-runtime'], ['transform-class-properties', { spec: true }], ['transform-es2015-classes']]
	  }
	}));
	
	// middleware
	app.use((0, _compression2.default)({ level: 9, threshold: 0, filter: function filter() {
	    return true;
	  } }));
	app.use(_bodyParser2.default.json({ limit: '1mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '1mb', extended: true }));
	app.use((0, _cookieParser2.default)());
	app.use((0, _expressValidator2.default)());
	app.use(app.get('config_public_path'), _express2.default.static(app.get('config_dist_folder'), { maxAge: app.get('config_static_maxage') }));
	if (NODE_ENV === 'development') {
	  app.use((0, _morgan2.default)('dev'));
	  app.use((0, _errorhandler2.default)());
	}
	
	// mongodb config
	// mongoose.connect(app.get('config_mongodb_uri'));
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "src/server"))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("errorhandler");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("express-react-views");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("express-validator");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {// Webpack Config for {Development} (Client & Server)
	// · devTool: https://webpack.github.io/docs/build-performance.html#sourcemaps
	// · Optimization: https://github.com/webpack/docs/wiki/optimization
	// · Hot Reload: https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
	// · React Hot Reloader (Beta 3): https://github.com/gaearon/react-hot-boilerplate/pull/61
	// · uglifyjsplugin: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
	// · NoErrorsPlugin: https://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
	// · ExtractTextPlugin: https://github.com/webpack/extract-text-webpack-plugin
	// · DefinePlugin: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
	
	const ExtractTextPlugin = __webpack_require__(14);
	const fs = __webpack_require__(15);
	const path = __webpack_require__(12);
	const webpack = __webpack_require__(16);
	
	const NODE_ENV = process.env.NODE_ENV === 'production' ? 
	  'production' : 
	  'development';
	const defineEnv = {
	  NODE_ENV: JSON.stringify(NODE_ENV),
	   // When true, the content is rendered in the client-side.
	   // when it's not defined or 'false', the content is server-side-rendered.
	  BROWSER: true,
	};
	
	// Entries are all valid applications in ./src/application/[appName]
	const entry = {};
	fs.readdirSync(path.resolve(__dirname, './src/application'))
	  .forEach(app => {
	    const dir = path.resolve(__dirname, `./src/application/${app}/`);
	    const index = path.resolve(__dirname, `./src/application/${app}/index.jsx`);
	    if (fs.existsSync(index))
	      entry[app.toLowerCase()] =
	        NODE_ENV === 'production' ? 
	          [ 'babel-polyfill', index ] :
	          [ 'babel-polyfill', 'webpack-hot-middleware/client', index ]
	  });
	const include = [
	  /node_modules/,
	  path.resolve(__dirname, 'src/application'),
	  path.resolve(__dirname, 'src/client'),
	  path.resolve(__dirname, 'src/lib'),
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
	    sourceMap: false
	  }),
	  new webpack.optimize.DedupePlugin(),
	];
	
	module.exports = {
	  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval',
	  entry,
	  output: {
	    path: path.join(__dirname, 'build/dist'),
	    filename: '[name].js',
	    publicPath: '/static' /* Hot-Reload does not work if this is not set */
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
	        test: /\.less$/,
	        include,
	        loader: NODE_ENV === 'production' ?
	          ExtractTextPlugin.extract('raw-loader', 'css-loader?minimize!less-loader') :
	          ExtractTextPlugin.extract('raw-loader', 'css-loader!less-loader')
	      }, {
	        test: /\.css$/,
	        include,
	        loader: NODE_ENV === 'production' ?
	          ExtractTextPlugin.extract('raw-loader', 'css-loader?minimize') :
	          ExtractTextPlugin.extract('raw-loader', 'css-loader')
	      }, {
	        test: /\.(jpe?g|png|svg)$/,
	        loader: 'file-loader?name=/asset/image/[name].[ext]'
	      }, {
	        test: /\.(ttf|eot|woff|woff2)$/,
	        loader: 'file-loader?name=/asset/font/[name].[ext]'
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("extract-text-webpack-plugin");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("dotenv");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(8);
	
	var _HelloWorld = __webpack_require__(21);
	
	var _HelloWorld2 = _interopRequireDefault(_HelloWorld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var router = (0, _express.Router)();
	
	// Routes
	
	// Controllers
	router.get('/', _HelloWorld2.default);
	router.get('/one', _HelloWorld2.default);
	router.get('/two', _HelloWorld2.default);
	
	exports.default = router;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRouter = __webpack_require__(22);
	
	var _HelloWorld = __webpack_require__(23);
	
	var _HelloWorld2 = _interopRequireDefault(_HelloWorld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * GET /
	 * Home page.
	 */
	exports.default = function (req, res) {
	  (0, _reactRouter.match)({
	    routes: _HelloWorld2.default.Routes,
	    location: req.url
	  }, function (err, redirect, routerProps) {
	    res.render('default', {
	      Application: _HelloWorld2.default,
	      payload: {
	        title: 'My Application',
	        description: 'This is an example.',
	        routerProps: routerProps }
	    });
	  });
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(24);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(25);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(26);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(27);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(28);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(30);
	
	var _reactRedux = __webpack_require__(31);
	
	var _reactRouter = __webpack_require__(22);
	
	var _reactRouterRedux = __webpack_require__(32);
	
	var _store = __webpack_require__(33);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _routes = __webpack_require__(36);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Hot Reload!
	if (false) module.hot.accept();
	
	// Always check if env.BROWSER
	if (process.env.BROWSER) {
	  __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../node_modules/sanitize.css/sanitize.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	  __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./style/skeleton.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	}
	
	var Application = function (_React$Component) {
	  (0, _inherits3.default)(Application, _React$Component);
	
	  function Application() {
	    (0, _classCallCheck3.default)(this, Application);
	    return (0, _possibleConstructorReturn3.default)(this, (Application.__proto__ || (0, _getPrototypeOf2.default)(Application)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Application, [{
	    key: 'componentDidMount',
	    // It's defined by the server when matching the url with the routes.
	    value: function componentDidMount() {
	      // Let the reducer(s) decide if it should load the state from "PRELOAD_STATE"
	      if (process.env.BROWSER) _store2.default.dispatch({ type: 'PRELOAD_STATE' });
	    } // The Application's name must coincide with the folder's name.
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: _store2.default },
	        process.env.BROWSER ? // Client-Side / Server-Side rendering
	        _react2.default.createElement(
	          _reactRouter.Router,
	          { history: (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, _store2.default) },
	          Application.Routes
	        ) : _react2.default.createElement(_reactRouter.RouterContext, this.props.routerProps)
	      );
	    }
	  }]);
	  return Application;
	}(_react2.default.Component);
	
	// Render only in client-side.
	
	
	Object.defineProperty(Application, 'name', {
	  enumerable: true,
	  writable: true,
	  value: 'HelloWorld'
	});
	Object.defineProperty(Application, 'routerProps', {
	  enumerable: true,
	  writable: true,
	  value: {}
	});
	Object.defineProperty(Application, 'store', {
	  enumerable: true,
	  writable: true,
	  value: _store2.default
	});
	Object.defineProperty(Application, 'Routes', {
	  enumerable: true,
	  writable: true,
	  value: _routes2.default
	});
	if (process.env.BROWSER) {
	  (0, _reactDom.render)(_react2.default.createElement(Application, null), document.getElementById('app-body'));
	}
	exports.default = Application;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRouter = __webpack_require__(22);
	
	var _redux = __webpack_require__(34);
	
	var _reactRouterRedux = __webpack_require__(32);
	
	var _location = __webpack_require__(35);
	
	var _location2 = _interopRequireDefault(_location);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Enable ReduxDevTools (if installed) only in development and only in client.
	var ReduxDevTools = process.env.BROWSER === true && process.env.NODE_ENV === 'development' ? window.devToolsExtension : false;
	
	// Store
	
	// Reducers
	var store = (0, _redux.createStore)((0, _redux.combineReducers)({ // Reducers
	  location: _location2.default,
	  routing: _reactRouterRedux.routerReducer
	}), process.env.BROWSER ? window.PRELOADED_STATE : {}, // Default state
	(0, _redux.compose)( // Middleware
	// Manage navigation events via Redux actions
	(0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory)), ReduxDevTools ? ReduxDevTools() : function (f) {
	  return f;
	}));
	exports.default = store;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = location;
	
	var _reactRouterRedux = __webpack_require__(32);
	
	// location Reducer | Listen to LOCATION_CHANGE (from react-router-redux)
	function location() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    pathname: '',
	    search: '',
	    hash: '',
	    action: '',
	    key: '',
	    query: {}
	  };
	  var action = arguments[1];
	
	  if (action.type === _reactRouterRedux.LOCATION_CHANGE) {
	    return action.payload;
	  }
	  return state;
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(22);
	
	var _DefaultLayout = __webpack_require__(37);
	
	var _DefaultLayout2 = _interopRequireDefault(_DefaultLayout);
	
	var _Home = __webpack_require__(40);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _PageOne = __webpack_require__(41);
	
	var _PageOne2 = _interopRequireDefault(_PageOne);
	
	var _PageTwo = __webpack_require__(42);
	
	var _PageTwo2 = _interopRequireDefault(_PageTwo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = _react2.default.createElement(
	  _reactRouter.Router,
	  null,
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _DefaultLayout2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/one', component: _PageOne2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/two', component: _PageTwo2.default })
	  )
	);
	
	exports.default = routes;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(31);
	
	var _NavbarDefault = __webpack_require__(38);
	
	var _NavbarDefault2 = _interopRequireDefault(_NavbarDefault);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref2 = _react2.default.createElement(_NavbarDefault2.default, null);
	
	var DefaultLayout = function DefaultLayout(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { className: 'content-body' },
	    _ref2,
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      children
	    )
	  );
	};
	
	exports.default = (0, _reactRedux.connect)()(DefaultLayout);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(31);
	
	var _reactRouterRedux = __webpack_require__(32);
	
	var _Navbar = __webpack_require__(39);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavbarDefault = function NavbarDefault(_ref) {
	  var pathname = _ref.pathname,
	      goto = _ref.goto;
	  return _react2.default.createElement(
	    _Navbar2.default,
	    null,
	    _react2.default.createElement(
	      _Navbar2.default.List,
	      null,
	      _react2.default.createElement(
	        _Navbar2.default.Item,
	        null,
	        _react2.default.createElement(
	          _Navbar2.default.Link,
	          { to: goto('/'), active: pathname === '/' },
	          'Home'
	        ),
	        _react2.default.createElement(
	          _Navbar2.default.Link,
	          { to: goto('/one'), active: pathname === '/one' },
	          'One Page'
	        ),
	        _react2.default.createElement(
	          _Navbar2.default.Link,
	          { to: goto('/two'), active: pathname === '/two' },
	          'Second Page'
	        )
	      )
	    )
	  );
	};
	
	var mapStateToProps = function mapStateToProps(_ref2) {
	  var location = _ref2.location;
	  return {
	    pathname: location.pathname
	  };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    goto: function goto(pathname) {
	      return function onClick(e) {
	        e.preventDefault();
	        dispatch((0, _reactRouterRedux.push)(pathname));
	      };
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavbarDefault);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Navbar = function Navbar(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    "nav",
	    { className: "navbar" },
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      children
	    )
	  );
	};
	
	Navbar.List = function (_ref2) {
	  var children = _ref2.children;
	  return _react2.default.createElement(
	    "ul",
	    { className: "navbar-list" },
	    children
	  );
	};
	
	Navbar.Item = function (_ref3) {
	  var children = _ref3.children;
	  return _react2.default.createElement(
	    "li",
	    { className: "navbar-item" },
	    children
	  );
	};
	
	Navbar.Link = function (_ref4) {
	  var children = _ref4.children,
	      active = _ref4.active,
	      to = _ref4.to;
	  return _react2.default.createElement(
	    "a",
	    {
	      className: "navbar-link " + (active ? 'active' : ''),
	      onClick: typeof to === 'function' ? to : '',
	      href: typeof to === 'function' ? '#' : to
	    },
	    children
	  );
	};
	
	exports.default = Navbar;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _react2.default.createElement(
	  'h3',
	  null,
	  'Simple, generic, and reusable'
	);
	
	var _ref2 = _react2.default.createElement(
	  'p',
	  null,
	  _react2.default.createElement(
	    'b',
	    null,
	    'mern-workflow'
	  ),
	  ' \u2500 A boilerplate for building isomorphic JavaScript applications using the MERN stack (Mongo, Express.js, React.js & Redux.js, and NodeJS).'
	);
	
	var _ref3 = _react2.default.createElement(
	  'p',
	  null,
	  _react2.default.createElement(
	    'a',
	    { className: 'github-button', href: 'https://github.com/eddyw/mern-workflow', 'data-icon': 'octicon-star', 'data-style': 'mega', 'aria-label': 'Star eddyw/mern-workflow on GitHub' },
	    'Star'
	  ),
	  ' ',
	  _react2.default.createElement(
	    'a',
	    { className: 'github-button', href: 'https://github.com/eddyw/mern-workflow/fork', 'data-icon': 'octicon-repo-forked', 'data-style': 'mega', 'aria-label': 'Fork eddyw/mern-workflow on GitHub' },
	    'Fork'
	  )
	);
	
	var _ref4 = _react2.default.createElement(
	  'div',
	  { className: 'container' },
	  _react2.default.createElement(
	    'pre',
	    null,
	    _react2.default.createElement(
	      'code',
	      null,
	      'git clone https://github.com/eddyw/mern-workflow.git',
	      _react2.default.createElement('br', null),
	      'cd mern-workflow/',
	      _react2.default.createElement('br', null),
	      'npm install',
	      _react2.default.createElement('br', null),
	      'npm start'
	    )
	  )
	);
	
	exports.default = function () {
	  return _react2.default.createElement(
	    'section',
	    { style: { padding: '8rem 0 7rem' } },
	    _react2.default.createElement(
	      'div',
	      { className: 'container', style: { textAlign: 'center' } },
	      _ref,
	      _ref2,
	      _ref3
	    ),
	    _ref4
	  );
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _react2.default.createElement(
	  'div',
	  null,
	  'You are checking /one'
	);
	
	var Main = function Main() {
	  return _ref;
	};
	
	exports.default = Main;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _react2.default.createElement(
	  'div',
	  null,
	  'You are checking /two'
	);
	
	var Main = function Main() {
	  return _ref;
	};
	
	exports.default = Main;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mongoose = __webpack_require__(44);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postsSchema = new _mongoose2.default.Schema({
	  content: String,
	  user: {
	    type: Schema.ObjectId,
	    ref: 'users'
	  }
	});
	
	_mongoose2.default.model('posts', postsSchema);

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mongoose = __webpack_require__(44);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var usersSchema = new _mongoose2.default.Schema({
	  name: String
	});
	
	_mongoose2.default.model('users', usersSchema);

/***/ }
/******/ ]);
//# sourceMappingURL=server.bundle.js.map