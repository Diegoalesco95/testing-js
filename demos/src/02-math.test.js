const { divide, multiply, sum } = require('./02-math');

test('adds 1 + 3 to equal 4', () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

test('multiplies 2 * 3 to equal 6', () => {
  const result = multiply(2, 3);
  expect(result).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
  const result = divide(6, 2);
  expect(result).toBe(3);
});

test('divides 2 / 0 to equal null', () => {
  const result = divide(2, 0);
  expect(result).toBeNull();
});
