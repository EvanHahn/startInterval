import assert from "node:assert/strict";
import { afterEach, beforeEach, mock, test } from "node:test";
import startInterval from "./index.js";

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
