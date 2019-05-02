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
    post: function (callback = () => { }) {
      //var tempRoomID = db.query()
      //var tempUserID = db.query()
      db.query('INSERT INTO messages ', (err, result) => {
        err && console.error(err);
        callback('POST Messages callback: ', ...result);
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
    post: function (callback = () => { }) {
      //how do we get the name into next line?
      db.query('INSERT INTO users ', (err, result) => {
        err && console.error(err);
        callback('POST Usernames callback: ', ...result);
      });
    }
  }
};

