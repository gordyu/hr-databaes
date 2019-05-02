let Rooms = {

  _storage: new Set(['All']),

  items: () => Array.from(Rooms._storage),

  update: (messages, callback) => {
    messages.forEach(message => {
      Rooms._storage.add(message.roomname);
    });
    callback();
  },

  add: (roomname, callback) => {
    Rooms._storage.add(roomname);
    callback();
  },

  _selected: 'All',

  isSelected: roomname => roomname === Rooms._selected,

  set: (roomname, callback) => {
    Rooms._selected = roomname;
    callback();
  }

};