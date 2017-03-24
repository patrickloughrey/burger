'use strict'

var mysql = require('mysql');

/* Create the mySQL connection using node */
var connection = mysql.createConnect({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'burgers_db'
});

/* Export the connection */
module.exports = connection;