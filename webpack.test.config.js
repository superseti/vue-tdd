const config = require('./webpack.config');
config.entry = './test/tests.entry.js';
config.output.filename = 'test.bundle.js';
module.exports = config;
