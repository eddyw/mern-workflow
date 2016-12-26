/**
 * Runs the server
 */

const NODE_ENV = process.env.NODE_ENV || 'development';

console.log('NODE_ENV ===> ', NODE_ENV);

if (NODE_ENV === 'production') {
  require('./build/server.bundle.js');  // babel-node server.js
} else {
  require('./src/server/server.dev');   // node server.js
}
