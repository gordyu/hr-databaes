var db = require('../db');
const headers = require('../cors.json');

module.exports = {
  messages: {
    get: function (req, res) {
      db.messages.findAll({ include: [db.users] })
        .then(function (messages) {
          res.json(messages);
          // res.end();
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      db.messages.create({ where: { username: req.body.username } })
        .then(() => {
          res.sendStatus(201);
          // res.end();
        });
    }
  },

  users: {
    get: function (req, res) {
      db.users.findAll()
        .then(function (users) {
          res.json(users);
        });
    },
    post: function (req, res) {
      db.users.findOrCreate({ where: { username: req.body.username } })
        .then(() => {
          res.sendStatus(201);
        });
    }
  }
};

