require('./index');
let sampleArray = [];

beforeEach(() => {
  sampleArray = [1, 2, 3, 4, 5, 6];
});

test('Test Custom Reduce for Sum', () => {
  const callback = (acc, element) => acc + element;
  expect(sampleArray.customReduce(callback)).toStrictEqual(
    sampleArray.reduce(callback)
  );
});
test('Test Custom Reduce for Product', () => {
    const callback = (acc, element) => acc * element;
    expect(sampleArray.customReduce(callback)).toStrictEqual(
      sampleArray.reduce(callback)
    );
  });
  