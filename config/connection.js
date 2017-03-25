'use strict'

var mysql = require('mysql');
var app = require('../server');

/* Create the mySQL connection using node */
if(app.settings.env == "development") {

    var connection = mysql.createConnect({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'burgers_db'

  });

} else {  
   var connection = mysql.createConnection(process.env.JAWSDB_URL);
}


/* Export the connection */
module.exports = connection;