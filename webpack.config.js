var path = require('path');

module.exports = {
    entry : './src/main.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000
    }
};