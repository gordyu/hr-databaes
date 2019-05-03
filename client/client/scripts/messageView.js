var MessageView = {

  render: _.template(`
    <div class="chat">
      <div class="username"><%- username %></div>
      <div><%- content %></div>
    </div>
  `),

  renderFriend: _.template(`
    <div class="chat">
      <div class="username friend"><%- username %></div>
      <div><%- content %></div>
    </div>
  `),

  conform: (message) => {
    message.username = message.username || 'anonymous';
    message.content = message.content || '';
    message.roomname = message.roomname || 'lobby';
    return message;
  }

};