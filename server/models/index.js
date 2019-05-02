var db = require('../db').connection;
const Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (callback = () => { }) {
      db.query('SELECT messages.content, rooms.roomname, users.username FROM messages, rooms, users WHERE messages.roomID = rooms.id AND messages.userID = users.id', (err, result) => {
        err && console.error(err);
        callback('GET Messages callback: ', ...result);
      });
    }, // a function which produces all the messages
    post: function (message, callback = () => { }) {
      db.query(`INSERT INTO messages (roomID, content, userID) VALUES (1, '${message.content}', (SELECT users.id FROM users WHERE users.username = '${message.username}'))`, (err, result) => {
        err && console.error(err);
        callback('POST Messages callback: ', result);
      });
    } // a function which can be used to insert a message into the database
    
  },

  users: {
    get: function (callback = () => { }) {
      db.query('SELECT * FROM users', (err, result) => {
        err && console.error(err);
        callback('GET Usernames callback: ', ...result);
      });
    },
    post: function (user, callback = () => { }) {
      db.query(`INSERT INTO users (username) VALUES ('${user.username}')`, (err, result) => {
        err && console.error(err);
        callback('POST Usernames callback ', result);
      });
    }
  }
};

