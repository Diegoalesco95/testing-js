// Matchers

test('Test object', () => {
  const data = {
    name: 'John',
  };

  data.age = 30;

  expect(data).toEqual({
    name: 'John',
    age: 30,
  });
});

test('null', () => {
  const nullValue = null;
  expect(nullValue).toBeNull();
  expect(nullValue).toBeDefined();
});

test('booleans', () => {
  const isTrue = true;
  const isFalse = false;

  expect(isTrue).toEqual(true);
  expect(isFalse).toEqual(false);

  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

test('strings', () => {
  const name = 'John';
  expect(name).toMatch(/Jo/);
});

test('arrays', () => {
  const numbers = [1, 2, 3];
  expect(numbers).toContain(2);
});
