/**
 * Application entry point to run server.
 */

if (process.env.NODE_ENV === 'production') {
  // In production, serve the webpacked server file.
  console.log('Testing the production server...');
  require('./dist/server.js');
} else {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
    presets: ['env']
  });
  require('babel-polyfill');
  require('./server');
}
