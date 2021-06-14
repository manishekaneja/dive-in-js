Object.defineProperty(Array.prototype, 'customForeach', {
  value: function (callback) {
    for (let idx in this) {
      callback(this[idx], idx, this);
    }
  },
  enumerable: false,
  writable: false,
});
