const path = require('path');
const ExternalsPlugin = require('webpack2-externals-plugin');
const plugins = [];

/*
 * In production, do NOT bundle node dependencies.
 *
 * Because our actual server code is compiled
 * in real time with babel during development,
 * the only real reason to run webpack in development
 * is to generate a report of the modules used.
 *
 * So when compiling for production, we want to make
 * sure and not include node modules, since they'll
 * obviously be available on the server.
 */
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, 'node_modules')
    })
  );
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'server/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  plugins: plugins
};
