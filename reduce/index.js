Object.defineProperty(Array.prototype, 'customReduce', {
  value: function (callback) {
    let accumulator = this[0];
    for (let idx = 1; idx < this.length; idx++) {
      accumulator = callback(accumulator, this[idx]);
    }
    return accumulator;
  },
  enumerable: false,
  writable: false,
});
