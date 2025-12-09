const { test, beforeEach, afterEach, mock } = require("node:test");
const assert = require("node:assert").strict;
const startInterval = require(".");

beforeEach(() => {
  mock.timers.enable();
});

afterEach(() => {
  mock.timers.reset();
});

test("calls the function immediately, then multiple times on an interval", () => {
  const fn = mock.fn();

  startInterval(fn, 100);
  assert.strictEqual(fn.mock.callCount(), 1);

  mock.timers.tick(99);
  assert.strictEqual(fn.mock.callCount(), 1);

  mock.timers.tick(2);
  assert.strictEqual(fn.mock.callCount(), 2);

  mock.timers.tick(100);
  assert.strictEqual(fn.mock.callCount(), 3);

  mock.timers.tick(100);
  assert.strictEqual(fn.mock.callCount(), 4);
});
