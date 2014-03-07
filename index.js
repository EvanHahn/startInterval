function startInterval(fn) {
	fn();
	return setInterval.apply(this, arguments);
}

if (typeof module !== 'undefined') {
	module.exports = startInterval;
}
