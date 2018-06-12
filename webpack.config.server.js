const path = require('path');
const ExternalsPlugin = require('webpack2-externals-plugin');

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
    plugins: [
        new ExternalsPlugin({
            type: 'commonjs',
            include: path.join(__dirname, 'node_modules')
        })
    ]
};
