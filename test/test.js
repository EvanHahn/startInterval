var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var startInterval = require('..');

describe('startInterval', function() {

  var fn, clock;
  beforeEach(function() {
    fn = sinon.spy();
    clock = sinon.useFakeTimers();
  });

  var interval;
  afterEach(function() {
    clearInterval(interval);
    clock.restore();
  });

  it('calls the function immediately', function() {
    interval = startInterval(fn, 1000);
    expect(fn.calledOnce).to.be.true;
  });

  it('calls the function many times over time', function() {
    interval = startInterval(fn, 100);
    clock.tick(99);
    expect(fn.callCount).to.equal(1);
    clock.tick(2);
    expect(fn.callCount).to.equal(2);
    clock.tick(100);
    expect(fn.callCount).to.equal(3);
    clock.tick(100);
    expect(fn.callCount).to.equal(4);
  });

});
