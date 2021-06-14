require('./index');
let sampleArray = [];

beforeEach(() => {
  sampleArray = [1, 2, 3, 4, 5, 6];
});

test('Test Custom ForEach', () => {
  let actualValue = 0;
  let expectedValue = 0;
  sampleArray.customForeach(() => {
    actualValue++;
  });
  sampleArray.forEach(() => {
    expectedValue++;
  });
  expect(actualValue).toBe(expectedValue);
});