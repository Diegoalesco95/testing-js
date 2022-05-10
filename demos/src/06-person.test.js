const Person = require('./06-person');

describe('Test for person', () => {
  let person;

  beforeEach(() => {
    person = new Person('John', 45, 1.7);
  });

  test('Should overweight level 1', () => {
    person.weight = 80;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });

  test('Should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
});
