var models = require('../models');
const headers = require('../cors.json');

module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200, headers);
      models.messages.get(console.log);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(/** something */);
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      res.writeHead(200, headers);
      models.users.get(console.log);
    },
    post: function (req, res) {
      models.messages.post(/* something */);
    }
  }
};

