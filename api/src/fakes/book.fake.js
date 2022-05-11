const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (count = 10) => {
  const fakeBooks = [];
  for (let i = 0; i < count; i += 1) {
    fakeBooks.push(generateOneBook());
  }

  return [...fakeBooks];
};

module.exports = {
  generateOneBook,
  generateManyBooks,
};
