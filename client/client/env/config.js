// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', '2ef3d2c5e858caa0f408245343948b1473cac982');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'c4585920fd5f002e861bcb48a7f9a61f8893ee43');
});

// Put your campus prefix here
window.CAMPUS = 'hrr';