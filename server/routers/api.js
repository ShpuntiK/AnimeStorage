var express = require('express');
var api = require('../services/api');
var router = express.Router();

router.post('/signup', api.signUp);
router.post('/login', api.login);
router.get('/me/animes', api.userAnimes);

module.exports = router;