require('./index');
let sampleArray = [];

beforeEach(() => {
  sampleArray = [1, 2, 3, 4, 5, 6];
});

test('Test Custom Map', () => {
  const callback = (element) => element * 2;
  expect(sampleArray.customMap(callback)).toStrictEqual(
    sampleArray.map(callback)
  );
});

test('Test Index in Custom Map', () => {
  const callback = (element, idx) => element * idx;
  expect(sampleArray.customMap(callback)).toStrictEqual(
    sampleArray.map(callback)
  );
});
