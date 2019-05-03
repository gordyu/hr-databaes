var models = require('../models');
const headers = require('../cors.json');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, ...results) => {
        res.writeHead(200, headers);
        res.write(JSON.stringify(results));
        res.end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.writeHead(201, headers);
      models.messages.post(req.body, (err, result) => {
        res.end();
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((err, ...results) => {
        res.writeHead(200, headers);
        res.write(JSON.stringify(results));
        res.end();
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (err, result) => {
        res.writeHead(201, headers);
        res.end();
      });
    }
  }
};

