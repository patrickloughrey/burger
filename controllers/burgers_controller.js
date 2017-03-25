/* Import express */
var express = require('express');
/* Import the model to use database functions */
var burger = require('../models/burger.js');

var router = express.Router();

/* Create all routes */

/* Main Get route */
router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', {
          burgers: data
        });
    });
});

/* Export router */
module.exports = router;


