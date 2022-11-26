const { MongoClient } = require("mongodb");

describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it("should insert a doc into collection", async () => {
    const users = db.collection("users");

    const mockUser = { _id: "some-user-id", name: "John" };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: "some-user-id" });
    expect(insertedUser).toEqual(mockUser);
  });
});

// var chai = require('chai');
// var mongoose = require('mongoose');
// var chaiHttp = require('chai-http');
// var server = require('../server/app'); // my express app
// var should = chai.should();
// var testUtils = require('./test-utils');

// chai.use(chaiHttp);

// describe('API Tests', function() {
//   before(function() {
//     mongoose.createConnection('mongodb://localhost/bot-test', myOptionsObj);
//   });

//   beforeEach(function(done) {
//     // I do stuff like populating db
//   });

//   afterEach(function(done) {
//     // I do stuff like deleting populated db
//   });

//   after(function() {
//     mongoose.connection.close();
//   });

//   describe('Boxes', function() {

//     it.only('should list ALL boxes on /boxes GET', function(done) {
//       chai.request(server)
//         .get('/api/boxes')
//         .end(function(err, res){
//           res.should.have.status(200);
//           done();
//         });
//     });

//     // the rest of the tests would continue here...

//   });

// });
