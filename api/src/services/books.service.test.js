const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAllBooks = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAllBooks,
  create: () => [],
}
)));

describe('Test for Book Service', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should return an array of books', async () => {
      const fakeBooks = generateManyBooks();
      mockGetAllBooks.mockResolvedValue(fakeBooks);
      const books = await service.getBooks();
      expect(books.length).toBeGreaterThan(9);
      expect(mockGetAllBooks).toHaveBeenCalled();
      expect(mockGetAllBooks).toHaveBeenCalledTimes(1);
      expect(mockGetAllBooks).toHaveBeenCalledWith('books', undefined);
    });

    test('should return two books', async () => {
      const fakeBooks = generateManyBooks(2);
      mockGetAllBooks.mockResolvedValue(fakeBooks);
      const books = await service.getBooks();
      expect(books.length).toEqual(2);
    });
  });
});
