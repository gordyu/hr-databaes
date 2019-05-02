var db = require('../db').connection;

module.exports = {
  messages: {
    get: function () {
      return db.query('SELECT * FROM messages', (err, result) => {
        err && console.error(err);
        console.log('ALL MESSAGES: ', result);
      });
    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

