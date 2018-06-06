// mocha global configuration file
const chai = require('chai'),
      spies = require('chai-spies'),
      context = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));

chai.use(spies);
context.chai = chai;
context.expect = chai.expect;
process.env.TS_NODE_CACHE = false;
