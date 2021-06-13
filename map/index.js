Object.defineProperty(Array.prototype, 'customMap', {
  value: function (callback) {
    let updatedArray = [];
    for (let idx in this) {
      updatedArray.push(callback(this[idx], idx, this));
    }
    return updatedArray;
  },
  enumerable: false,
  writable: false,
});
