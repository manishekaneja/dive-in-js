Object.defineProperty(Array.prototype, 'customFilter', {
  value: function (callback) {
    const filteredArray = [];
    for (let idx in this) {
      const valueFlag = callback(this[idx], idx, this);
      if (valueFlag) {
        filteredArray.push(this[idx]);
      }
    }
    return filteredArray;
  },
  enumerable: false,
  writable: false,
});
