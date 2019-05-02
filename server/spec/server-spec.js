/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function () {
  var dbConnection;

  beforeEach(function (done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    dbConnection.connect();

    var tablename = 'messages';

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function () {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function (done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'THE room of truth'
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function (err, results) {
          // Should have one result:
          expect(results.length).to.equal(1);

          expect(results[0].content).to.equal('In mercy\'s name, three days is all I need.');

          done();
        });
      });
    });
  });

  it('Should output all messages from the DB', function (done) {
    // Let's insert a message into the db
    var queryString = 'INSERT INTO messages (id, roomID, userID, content)' +
      'VALUES (1, 1, 1, "Men like you can never change!")';
    var queryArgs = [];
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you. */

    dbConnection.query(queryString, queryArgs, function (err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function (error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].content).to.equal('Men like you can never change!');
        expect(messageLog[0].roomID).to.equal(1);
        done();
      });
    });
  });

  it('Should return 200', function (done) {
    dbConnection.query(queryString, queryArgs, function (err) {
      if (err) { throw err; }
      const response = request('http://127.0.0.1:3000/classes/messages', function (error, response, body) {
        request('http://127.0.0.1:3000/classes/messages', function (error, response, body) {
          var messageLog = JSON.parse(body);
          expect(response).to.have.status(200);
          done();
        });
      });
    });
  });

  it('Should return 404', function (done) {
    var queryString = 'INSERT INTO messages (id, roomID, userID, content)' +
      'VALUES (1, 1, 1, "Men like you can never change!")';
    var queryArgs = [];

    dbConnection.query(queryString, queryArgs, function (err) {
      if (err) { throw err; }
      request('http://127.0.0.1:3000/classes/messages', function (error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].content).to.equal('Men like you can never change!');
        expect(messageLog[0].roomID).to.equal(1);
        done();
      });
    });
  });
});
