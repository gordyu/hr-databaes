var models = require('../models');
const headers = require('../cors.json');

module.exports = {
  messages: {
    get: function (req, res) {
      // res.writeHead(200, headers);
      models.messages.get((err, ...results) => {
        // if (err) res.sendStatus(404);
        res.write(JSON.stringify(results));
        res.end();
      });
      // models.messages.get(console.log); // TODO return message objects
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // models.messages.post((err, ...results) =>{
      //   if (err) res.sendStatus(400); // TODO parse message objects, save to server
      // }); // a function which handles posting a message to the database
      // console.log('MESSAGES POST REQUEST: ', req.on);
      // res.sendStatus(201);
      req.on('data', message => {
        console.log('MESSAGES POST: ', message.json);
        models.messages.post(JSON.parse(message), (err, result) =>{
          res.end();
        });
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((err, ...results) => {
        if (err) {
          res.sendStatus(404);
        }
        res.write(JSON.stringify(results));
        res.end();
      });
      res.writeHead(200, headers);
      models.users.get(console.log); // TODO return user names
    },
    post: function (req, res) {
      res.sendStatus(201);
      req.on('data', user => {
        console.log('USERS POST: ', user);
        models.users.post(JSON.parse(user), (err, result) =>{
          res.end();
        });
      });
    }
  }
};

