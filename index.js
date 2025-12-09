export default function startInterval(fn) {
  fn();
  return setInterval.apply(this, arguments);
}
