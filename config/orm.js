'use strict'

/* Require connection.js */
var connection = require('./connection.js');

/* Helper function to create question marks for SQL query */
function questionMarks(num) {   
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push("?");
    }

    arr = arr.toString();
    return arr;
}

/* Helper function for SQL object to proper syntax conversion */
function objectToSql(obj) {
    var arr = [];

    for(var key in obj) {
        if(Object.hasOwnProperty.call(obj, key)) {
            arr.push(key + "=" + obj[key]);
        }
    }

    arr = arr.toString();
    return arr;
}