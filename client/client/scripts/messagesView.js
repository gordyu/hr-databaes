var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    MessagesView.$chats.on('click', '.username', (friendNode) => {
      Friends.toggleStatus(friendNode.target.innerHTML, MessagesView.render);
    });
  },

  render: function () {
    MessagesView.$chats.html('');
    if (Rooms.isSelected('All')) {
      Messages.items()
        .sortBy('createdAt')
        .each(message => MessagesView.renderMessage(message));
    } else {
      Messages.items()
        .filter(message => Rooms.isSelected(message.roomname))
        .sortBy('createdAt')
        .each(message => MessagesView.renderMessage(message));
    }
  },

  renderMessage: function (message) {
    let $message;
    $message = Friends.isFriend(message.username) ?
      MessageView.renderFriend(MessageView.conform(message)) :
      MessageView.render(MessageView.conform(message));
    MessagesView.$chats.prepend($message);
  }

};