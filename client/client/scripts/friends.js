var Friends = {

  _storage: new Set(),

  toggleStatus: (friendname, callback) => {
    Friends._storage.has(friendname) ? Friends._storage.delete(friendname) :
      Friends._storage.add(friendname);
    callback();
  },

  isFriend: (friendname) => Friends._storage.has(friendname)

};