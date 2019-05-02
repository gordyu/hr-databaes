const Messages = {

  _storage: {},

  items: () => _.chain(Messages._storage),

  update: (messages, callback) => {
    for (let message of messages) {
      Messages._storage[message.objectId] = message;
      callback();
    }
  },

  add: (message, callback) => {
    Messages._storage[message.objectId] = message;
    callback();
  }

};