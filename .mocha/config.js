// mocha global configuration file
const expect = require('chai').expect;
const context = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
context.expect = expect;

process.env.TS_NODE_CACHE = false;
