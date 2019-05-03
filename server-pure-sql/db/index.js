var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user 'root', no password,
// and to the database 'chat'.

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat',
});

con.connect(function(err) {
  err && console.error(err);
  console.log('Connected!');
});

module.exports.connection = con;
