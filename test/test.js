// First, we require `expect` from Chai.
var chai = require('chai');
var expect = chai.expect;

// `describe` makes a "suite" of tests; think of them as a group.
describe('fake suite of tests', function() {

  // The tests have an English description...
  it('has 2 equal to be greater than 0', function() {

    // ...and a code assertion.
    expect(2).to.be.above(0);

  });

  // You can have multiple tests in a suite.
  it('has 1 equal to 1', function() {
    expect(1).to.equal(1);
  });

});
