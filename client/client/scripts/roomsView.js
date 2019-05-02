var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$button.on('click', () => {
      roomname = prompt('Please enter a room name');
      if (roomname !== undefined && roomname !== null && roomname !== '') {
        Rooms.add(roomname, RoomsView.render);
      }
    });

    RoomsView.$select.on('change', () => {
      Rooms.set(RoomsView.$select.val(), MessagesView.render);
    });
  },

  render: function () {
    RoomsView.$select.html('');
    Rooms.items().forEach(roomname => {
      if (roomname !== undefined && roomname !== '' && roomname !== null) {
        RoomsView.renderRoom(roomname);
      }
    });
    $(`select option:contains(${Rooms._selected})`).prop('selected', true);
  },

  renderRoom: (roomname) => {
    let $roomname = _.template(`
      <option><%- roomname %></option>
    `)({ roomname });
    RoomsView.$select.append($roomname);
  }

};
