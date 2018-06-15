Error.stackTraceLimit = Infinity;

// mocha global configuration file
const chai = require('chai'),
      spies = require('chai-spies'),
      context = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));

chai.use(spies);
context.chai = chai;
context.expect = chai.expect;

const testContext = require.context('./test/', true, /\.spec\.ts$/);

testContext.keys().forEach(testContext);