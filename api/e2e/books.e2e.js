const request = require('supertest');
const { MongoClient } = require('mongodb');

const { generateManyBooks } = require('../src/fakes/book.fake');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for Books', () => {
  let app = null;
  let server = null;
  let database = null;
  let collection = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    database = client.db(DB_NAME);
    collection = database.collection('books');
  });

  afterAll(async () => {
    await server.close();
    await database.dropCollection('books');
  });

  describe('[GET] /api/v1/books', () => {
    test('Should return a list books', async () => {
      const seedData = await collection.insertMany(generateManyBooks(2));

      const { body } = await request(app)
        .get('/api/v1/books')
        .expect(200);

      expect(body.length).toBe(seedData.insertedCount);
    });
  });
});
