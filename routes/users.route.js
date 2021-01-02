var express = require('express');
var router = express.Router();

var controller = require('../controllers/users.controller');

router.get('/login', controller.login);

router.post('/login',controller.postlogin);

module.exports = router;