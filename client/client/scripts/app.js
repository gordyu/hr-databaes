var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // setInterval(() => {
    //   App.startSpinner();
    //   App.fetch(App.stopSpinner);
    // }, 4000);
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      console.log('fetch');
      // examine the response from the server request:
      Messages.update(data.results, MessagesView.render);
      Rooms.update(data.results, RoomsView.render);
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
