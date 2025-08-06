var path = require('path');

module.exports = {
    mode : 'development',
    entry : './src/main.js',
    devtool: 'eval',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000
    }
};