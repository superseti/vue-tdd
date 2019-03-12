var html;    // Unsure what _your code_ needs here -- using `undefined` to trigger default value
var options = { url: 'http://localhost/' };
require('jsdom-global')(html, options);
global.expect = require('expect');
window.Date = Date;

// window.chai = require('chai');
// const spies = require('chai-spies');
// window.chai.use(spies);
