require('./index');
let sampleArray = [];

beforeEach(() => {
  sampleArray = [1, 2, 3, 4, 5, 6];
});

test('Test Custom Filter', () => {
  const callback = (value) => value >= 4;
  expect(sampleArray.customFilter(callback)).toStrictEqual(
    sampleArray.filter(callback)
  );
});
